import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Sparkles, Heart, Calendar, Clock, Star } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  date?: Date;
  time?: string;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState("");

  const addTodo = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: trimmed,
        completed: false,
        date: selectedDate,
        time: selectedTime || undefined,
      },
    ]);
    setInput("");
    setSelectedDate(undefined);
    setSelectedTime("");
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen gradient-hero flex flex-col items-center px-4 py-8 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 text-secondary animate-float opacity-60">
        <Heart size={24} fill="currentColor" />
      </div>
      <div className="absolute top-20 right-16 text-primary animate-float opacity-50" style={{ animationDelay: "1s" }}>
        <Sparkles size={20} />
      </div>
      <div className="absolute bottom-32 left-20 text-accent animate-sparkle opacity-40">
        <Heart size={16} fill="currentColor" />
      </div>
      <div className="absolute top-40 right-8 text-secondary animate-sparkle opacity-50" style={{ animationDelay: "0.5s" }}>
        <Sparkles size={14} />
      </div>
      <div className="absolute bottom-20 right-24 text-primary animate-float opacity-30" style={{ animationDelay: "1.5s" }}>
        <Star size={18} fill="currentColor" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <Sparkles size={20} className="text-secondary" />
          <img src="/favicon.ico" alt="Logo" className="w-8 h-8 rounded-full object-cover shadow-cute" />
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-body font-semibold">
            Anna's Schedule Planner
          </p>
          <Sparkles size={20} className="text-secondary" />
        </div>
        <h1 className="font-display text-5xl md:text-6xl gradient-primary bg-clip-text text-transparent mb-3">
          To Do List
        </h1>
        <p className="text-muted-foreground font-body text-base flex items-center justify-center gap-1.5">
          <Heart size={14} className="text-secondary" fill="currentColor" />
          Stay cute & productive
          <Heart size={14} className="text-secondary" fill="currentColor" />
        </p>
        {todos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-3 flex items-center justify-center gap-3"
          >
            <div className="h-2 w-32 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full rounded-full gradient-primary"
                initial={{ width: 0 }}
                animate={{ width: `${todos.length > 0 ? (completedCount / todos.length) * 100 : 0}%` }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </div>
            <span className="text-xs text-muted-foreground font-body">
              {completedCount}/{todos.length} done 💖
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Input Area */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md mb-6"
      >
        <div className="gradient-card rounded-2xl border border-border shadow-card p-4 space-y-3">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
              placeholder="What's on your mind, babe? 💭"
              className="flex-1 px-4 py-2.5 rounded-xl bg-background/60 border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <button
              onClick={addTodo}
              className="gradient-primary rounded-xl p-2.5 text-primary-foreground shadow-cute hover:scale-105 active:scale-95 transition-transform"
            >
              <Plus size={20} />
            </button>
          </div>

          {/* Date & Time pickers */}
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className={cn(
                    "flex-1 flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-body transition-colors",
                    selectedDate
                      ? "bg-primary/10 border-primary/30 text-foreground"
                      : "bg-background/40 border-border text-muted-foreground hover:border-primary/30"
                  )}
                >
                  <Calendar size={14} />
                  {selectedDate ? format(selectedDate, "MMM d, yyyy") : "Add date"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>

            <div
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-body transition-colors",
                selectedTime
                  ? "bg-primary/10 border-primary/30"
                  : "bg-background/40 border-border"
              )}
            >
              <Clock size={14} className="text-muted-foreground" />
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="bg-transparent text-foreground focus:outline-none font-body text-xs w-20"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Todo List */}
      <div className="w-full max-w-md space-y-2.5">
        <AnimatePresence mode="popLayout">
          {todos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-muted-foreground font-body"
            >
              <p className="text-5xl mb-4">🌸</p>
              <p className="text-sm">Your schedule is clear, queen!</p>
              <p className="text-xs mt-1 opacity-70">Add something fabulous ✨</p>
            </motion.div>
          )}
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              layout
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={cn(
                "flex items-center gap-3 px-4 py-3.5 rounded-2xl border shadow-card transition-all font-body group",
                todo.completed
                  ? "bg-muted/40 border-border"
                  : "gradient-card border-border hover:shadow-cute"
              )}
            >
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
                className="h-5 w-5 rounded-md border-2 border-primary/40 data-[state=checked]:gradient-primary data-[state=checked]:border-transparent transition-all"
              />
              <div className="flex-1 min-w-0">
                <span
                  className={cn(
                    "text-sm transition-all block",
                    todo.completed
                      ? "text-muted-foreground opacity-60"
                      : "text-foreground"
                  )}
                >
                  {todo.text}
                </span>
                {(todo.date || todo.time) && (
                  <div className="flex items-center gap-2 mt-1">
                    {todo.date && (
                      <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <Calendar size={10} />
                        {format(todo.date, "MMM d")}
                      </span>
                    )}
                    {todo.time && (
                      <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                        <Clock size={10} />
                        {todo.time}
                      </span>
                    )}
                  </div>
                )}
              </div>
              {todo.completed && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-xs"
                >
                  ✅
                </motion.span>
              )}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-muted-foreground hover:text-destructive transition-colors p-1 opacity-0 group-hover:opacity-100"
              >
                <Trash2 size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
