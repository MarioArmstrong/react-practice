import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Dave', 'Kevin'];
        const int = Math.floor(Math.random() *3);
        return names[int];
      }

      const handleClick = () => {
        console.log('you clicked it!');
      }
      const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
      }
      const handleClick3 = (e) => {
        console.log(e.target.innerText);
      }
    // to create a duplicate use SHIFT + ALT + downArrow
  return (
    <main>
        <p
        onDoubleClick={handleClick}
        >
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click It</button>
        
        <button onClick={() => {handleClick2('Dave')}}>Click It</button>
        {/* handleClick2 has the operators () but isn't called immediately because it is inside an anonymous function */}

        <button onClick={(e) => {handleClick3(e)}}>Click It</button>

    </main>
  )
}

export default Content