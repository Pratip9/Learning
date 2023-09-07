import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import AOS from "aos";
import "aos/dist/aos.css";
import { FitScreen } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  dispalyMoney,
  generateDiscountedPrice,
} from "../DisplayMoney/DisplayMoney";
import { addItemToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    height: FitScreen,
    borderRadius:"20px",
    margin: theme.spacing(4),
    backgroundColor: "white",
    currsor: "pointer",
    boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.4)",
    "&:hover": {
      boxShadow: "-1px 10px 29px 0px #191D88",
    },
  },
  media: {
    height: 200,
    width: "100%",
    objectFit: "cover",
  },

  button: {
    marginTop: -15,
    backgroundColor: "#191D88",
    color: "white",
    borderRadius: 0,
    fontWeight: "bold",
    width: "100%",
    height: 45,
    "&:hover": {
      backgroundColor: "#FF7F3F",
      color: "white",
      fontWeight: "bold",
    },
  },
  oldPrice: {
    textDecoration: "line-through",
    fontWeight: "400",
    color: "#ed1c24",
    marginRight: theme.spacing(17),
  },
  finalPrice: {
    color: "#03C988",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  description: {
    fontSize: "0.9rem",
    fontWeight: 500,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  },
}));

const ProductCard = ({ product }) => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const dispatch = useDispatch();
  const classes = useStyles();
  let discountPrice = generateDiscountedPrice(product.price);
  discountPrice = dispalyMoney(discountPrice);
  const oldPrice = dispalyMoney(product.price);

  const truncated =
    product.description.split(" ").slice(0, 5).join(" ") + "...";
  const nameTruncated = product.name.split(" ").slice(0, 3).join(" ") + "...";

  const addTocartHandler = (id, qty) => {
    dispatch(addItemToCart(id, qty));
  };

  return (
    <Card
      className={classes.root}
      data-aos="fade-zoom-in"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <Link
        className="productCard"
        to={`/product/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={product.images[0].url} />
          <CardContent>
            <Typography
              gutterBottom
              color="black"
              fontWeight="bold"
              style={{ fontWeight: "700" }}
            >
              {nameTruncated}
            </Typography>
            <Box display="flex" alignItems="center">
              <Rating
                name="rating"
                value={product.ratings}
                precision={0.1}
                readOnly
                size="small"
                style={{ color: "#ed1c24", marginRight: 8, fontWeight: "400" }}
              />
              <Typography variant="body2" color="textSecondary">
                ({product.numOfReviews})
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.description}
            >
              {truncated}
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="body1" className={classes.oldPrice}>
                {oldPrice}
              </Typography>
              <Typography variant="body1" className={classes.finalPrice}>
                {discountPrice}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
      <Box display="flex" justifyContent="center" p={0}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => addTocartHandler(product._id, 1)}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
