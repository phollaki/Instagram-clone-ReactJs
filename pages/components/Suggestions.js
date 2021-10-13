import SuggestionProfile from "./SuggestionProfile";
import faker from "faker";
import { useState } from "react";
import { useEffect } from "react";
function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between">
        <h3 className="text-semibold text-sm text-gray-400">
          Suggestions for you
        </h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {suggestions.map((profile) => (
        <SuggestionProfile
          key={profile.id}
          id={profile.id}
          username={profile.username}
          avatar={profile.avatar}
          companyName={profile.company.name}
        />
      ))}
    </div>
  );
}

export default Suggestions;
