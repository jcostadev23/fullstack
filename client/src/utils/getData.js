async function getIdeas() {
  try {
    const result = await fetch('http://localhost:5000/api/ideas');
    const data = await result.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}

export { getIdeas };
