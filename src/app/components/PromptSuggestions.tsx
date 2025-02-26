// Component for displaying copywriting prompt suggestions
export default function PromptSuggestions() {
  const suggestions = [
    {
      icon: "🎨",
      text: "Create image",
      onClick: () => console.log("Create image clicked"),
    },
    {
      icon: "💡",
      text: "Brainstorm",
      onClick: () => console.log("Brainstorm clicked"),
    },
    {
      icon: "📝",
      text: "Summarize text",
      onClick: () => console.log("Summarize clicked"),
    },
    {
      icon: "📋",
      text: "Make a plan",
      onClick: () => console.log("Make a plan clicked"),
    },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={suggestion.onClick}
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors whitespace-nowrap"
        >
          <span>{suggestion.icon}</span>
          <span>{suggestion.text}</span>
        </button>
      ))}
    </div>
  );
} 