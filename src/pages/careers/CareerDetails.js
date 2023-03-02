import { useLoaderData, useParams } from 'react-router-dom';

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          molestias rerum. Dolorum quasi dolore consequuntur, eum repellendus
          magnam doloribus, sed, consectetur quas vel laboriosam ratione
          architecto sunt similique. Sapiente, omnis?
        </p>
      </div>
    </div>
  );
}

// loader function
export const careersDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`http://localhost:4000/careers/${id}`);

  if (!response.ok) {
    throw new Error('Could not find that career!');
  }

  return response.json();
};
