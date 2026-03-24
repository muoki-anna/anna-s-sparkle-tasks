import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Trash2, Plus, Sparkles, Heart } from "lucide-react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: trimmed, completed: false }]);
    setInput("");
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
    <div className="min-h-screen gradient-hero flex flex-col items-center px-4 py-10 relative overflow-hidden">
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

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="font-display text-5xl md:text-6xl gradient-primary bg-clip-text text-transparent mb-2">
          Anna's To Do
        </h1>
        <p className="text-muted-foreground font-body text-lg">
          ✨ Stay cute & productive ✨
        </p>
        {todos.length > 0 && (
          <p className="text-sm text-muted-foreground mt-2 font-body">
            {completedCount}/{todos.length} done 💖
          </p>
        )}
      </motion.div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md mb-6"
      >
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="What's on your mind, babe? 💭"
            className="flex-1 px-5 py-3 rounded-full bg-card border border-border shadow-card text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
          <button
            onClick={addTodo}
            className="gradient-primary rounded-full p-3 text-primary-foreground shadow-cute hover:scale-105 active:scale-95 transition-transform"
          >
            <Plus size={22} />
          </button>
        </div>
      </motion.div>

      {/* Todo List */}
      <div className="w-full max-w-md space-y-3">
        <AnimatePresence mode="popLayout">
          {todos.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-muted-foreground font-body"
            >
              <p className="text-4xl mb-3">🌸</p>
              <p>No tasks yet — add something cute!</p>
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
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl border shadow-card transition-colors font-body ${
                todo.completed
                  ? "bg-muted/60 border-border"
                  : "gradient-card border-border"
              }`}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
                  todo.completed
                    ? "gradient-primary border-transparent"
                    : "border-primary/40 hover:border-primary"
                }`}
              >
                {todo.completed && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Check size={14} className="text-primary-foreground" />
                  </motion.div>
                )}
              </button>
              <span
                className={`flex-1 text-sm transition-all ${
                  todo.completed
                    ? "line-through text-muted-foreground"
                    : "text-foreground"
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-muted-foreground hover:text-destructive transition-colors p-1"
              >
                <Trash2 size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
