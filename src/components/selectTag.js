import React, { useState } from 'react';
import { getChatGPTResponse } from './api';

export default function SelectTag() {
  const [tags, setTags] = useState(['Headache', 'fever']);
  const [inputValue, setInputValue] = useState('');
  const maxTags = 10;

  function countTags() {
    return maxTags - tags.length;
  }

  function createTag() {
    return tags.map((tag, index) => (
      <li key={index}>
        {tag} <i className="uit uit-multiply" onClick={() => removeTag(tag)}></i>
      </li>
    ));
  }

  function removeTag(tagToRemove) {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
  }

  function handleTagInput(e) {
    if (e.key === 'Enter') {
      const newTags = e.target.value.split(',').map(tag => tag.trim());

      const filteredNewTags = newTags.filter(tag => tag.length > 1 && !tags.includes(tag));

      if (tags.length + filteredNewTags.length <= maxTags) {
        setTags([...tags, ...filteredNewTags]);
      }

      setInputValue('');
    }
  }

  function removeAllTags() {
    setTags([]);
  }

  async function handleCheckup() {
    const ulElement = document.querySelector('.tag-box ul');
    const listItems = ulElement.querySelectorAll('li');
    const values = Array.from(listItems).map(item => item.textContent.trim());

    const input = values.join(', '); // Join symptoms with a comma
    const response = await getChatGPTResponse(input);

    const diseasesTextarea = document.querySelector('.diseases-textarea');
    diseasesTextarea.value = response;
  }

  return (
  <>
    <div className="body1">
      <div className="wrapper">
        <div className="title">
          <h2>Symptoms</h2>
        </div>
        <div className="content">
          <p>Press enter or add a comma after each tag</p>
          <div className="tag-box">
            <ul>
              {createTag()}
              <li>
                <input
                  type="text"
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyUp={handleTagInput}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="details">
          <p>
            <span>{countTags()}</span> Symptoms are remaining
          </p>
          <button className="btn-checkup" onClick={handleCheckup}>
            Check up
          </button>
          <button className="btn-remove" onClick={removeAllTags}>
            Remove all
          </button>
        </div>
      </div>
    </div>
    <div className="dis">
    <h2 className="h2-dis">Diseases : </h2>
       <textarea className="diseases-textarea" placeholder=""></textarea>

    </div>
    </>
  );
}