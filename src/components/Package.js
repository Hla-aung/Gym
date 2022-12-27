import { Card, CardContent, Stack, Typography, Button } from "@mui/material";
import FullPage from "./FullPage";
import bodybuilding from "./images/bodybuilding.jpg";
import fitness from "./images/fitness.jpg";
import cardio from "./images/cardio.jpg";
import weight from "./images/weight.jpg";

const program = [
  {
    id: 1,
    image: `${bodybuilding}`,
    title: "Body Building",
    trainer: "By Thomas Wayne",
    time: "16:00 - 18:00",
  },
  {
    id: 2,
    image: `${fitness}`,
    title: "Body Fitness",
    trainer: "By Thomas Wayne",
    time: "6:00 - 8:00",
  },
  {
    id: 3,
    image: `${cardio}`,
    title: "Cardio",
    trainer: "By Howard Stark",
    time: "16:00 - 18:00",
  },
  {
    id: 4,
    image: `${weight}`,
    title: "Weight Reducing",
    trainer: "By Howard Stark",
    time: "6:00 - 8:00",
  },
];

const Package = () => {
  return (
    <FullPage>
      <Stack mx={9} my={3}>
        <Typography
          id="package"
          variant="h3"
          sx={{ color: "#eff6e0", fontFamily: "Bungee, cursive" }}
        >
          Our Fitness <span style={{ color: "#124559" }}>Programs</span>
        </Typography>
        <div className="package">
          {program.map((item) => (
            <Card id={item.id} key={item.id} sx={{ margin: "50px 20px 0", backgroundColor: "#124559" }}>
              <Stack direction="row" alignItems="center">
                <img src={item.image} alt="card" className="card" />
                <CardContent sx={{marginLeft: "10px"}}>
                  <Stack>
                    <Typography variant="h6" sx={{color: "#aec3b0"}}>{item.title}</Typography>
                    <Typography variant="body 1" sx={{color: "#eff6e0", fontWeight: "500"}}>{item.trainer}</Typography>
                    <Typography variant="overline" sx={{fontWeight: "300"}} mb={2}>{item.time}</Typography>
                    <Button variant="contained" sx={{width: "10vw"}}>Join Now</Button>
                  </Stack>
                </CardContent>
              </Stack>
            </Card>
          ))}
        </div>
      </Stack>
    </FullPage>
  );
};

export default Package;
