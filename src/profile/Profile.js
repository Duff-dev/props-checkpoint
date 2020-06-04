import React from "react";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

function Profile(props) {
  const { bio, profession } = props.data;

  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "#f4f4f4",
        margin: "auto",
        marginTop: "30px",
        borderRadius: "5px",
      }}
    >
      <Card.Body>
        <img src={props.children} style={{ paddingTop: "10px" }} alt="" />
        <Card.Title>
          <strong>{profession}</strong>
        </Card.Title>
        <Card.Text style={{ padding: "5px" }}>
          <strong>Bio</strong> : {bio}
        </Card.Text>
        <Button className="button button2" onClick={props.handleName}>
          User Name
        </Button>
      </Card.Body>
    </Card>
  );
}

Profile.propTypes = {
  data: PropTypes.object,
};

Profile.defaultProps = {
  data: {
    fullName: "Riadh",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus felis vel augue consequat vehicula. Donec iaculis eu nisl vitae molestie. Nullam nulla tortor, imperdiet euismod imperdiet nec, dictum vitae nulla.",
    profession: "develloper",
  },
};

export default Profile;
