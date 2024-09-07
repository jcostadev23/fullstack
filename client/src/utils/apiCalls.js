async function getIdeas() {
  try {
    const result = await fetch('http://localhost:5000/api/ideas');
    const data = await result.json();

    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}

async function createIdea(idea) {
  try {
    const result = await fetch('http://localhost:5000/api/ideas/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(idea),
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}

async function deleteIdea(ideaId) {
  const username = localStorage.getItem('username') ?? '';
  try {
    const result = await fetch(
      `http://localhost:5000/api/ideas/delete/${ideaId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      }
    );
    const data = await result.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}

export { getIdeas, createIdea, deleteIdea };
