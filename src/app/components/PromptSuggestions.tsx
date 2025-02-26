// Component for displaying copywriting prompt suggestions
const PromptSuggestions = ({ onSelectPrompt }: { onSelectPrompt: (prompt: string) => void }) => {
  // List of copywriting prompts
  const prompts = [
    "Write a compelling value proposition for a new product",
    "Create a persuasive call-to-action that drives conversions",
    "Develop a brand voice guide with personality traits",
    "Generate engaging social media post variations",
    "Write an emotional story-driven marketing email",
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {prompts.map((prompt, index) => (
        <button
          key={index}
          onClick={() => onSelectPrompt(prompt)}
          className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default PromptSuggestions; 