import { Link } from "react-router-dom";

const Card = ({ src, firstName, lastName, id }) => {
  return (
    <div className="col-md-4 mb-3" key={id}>
      <div className="card h-100 shadow">
        <div className="card-image">
          <img src={src} alt="profile" />
        </div>
        <div className="card-body">
          <div className="card-title">
            <h1>
              {firstName} {lastName}
            </h1>
            <Link to={`/user/${id}`}>
              <button className="btn btn-primary btn-sm w-50 mt-3">Show Detail</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
