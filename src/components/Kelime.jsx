export const Kelime = ({ word }) => {
  return (
    <tr>
      <td>{word.word}</td>
      <td>{word.sentence}</td>
      <td>{word.category}</td>
      <td>{word.day}</td>
      <td>{word.month}</td>
      <td>{word.year}</td>
    </tr>
  );
};
