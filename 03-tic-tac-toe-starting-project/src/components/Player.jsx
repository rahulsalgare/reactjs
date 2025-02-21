import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // if your new state depends on your previous state value  you should
    // not update the state like this
    // setIsEditing(!isEditing);

    // since react 'schedule' to update the state behind the scene when we
    // directly call the set function, and if we instantlly call another
    // setIsEditing(!isEditing), the first one might not have finished
    // setting the value and so, the second one might not set the value
    // we'd expect it to set.

    // Doing this instead, react will get the value of isEditing
    // "At the time of executing "
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
