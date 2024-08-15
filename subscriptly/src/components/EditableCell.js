import React, {useState} from 'react'

const EditableCell = ({value, onSave}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [currentValue, setCurrentValue] = useState(value)

    const handleDoubleClick = () => {
        setIsEditing(true)
    }
    const handleChange = (e) => {
        setCurrentValue(e.target.value)
    }
    const handleBlur = () => {
        setIsEditing(false)
        if (currentValue !== value) {
            onSave(currentValue)
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleBlur()
        }
    }

  return (
    <td onDoubleClick={handleDoubleClick}>
        {isEditing ? (
            <input
                type="text"
                value={currentValue}
                onChange={handleChange}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
                autoFocus
            />
        ) : (
            currentValue
        )}
    </td>
  )
}

export default EditableCell