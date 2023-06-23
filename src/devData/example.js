import { promises as fsPromises } from 'fs';

const getReviewTextById = async (reviewId) => {
  try {
    const reviewsData = await fsPromises.readFile('./reviews.json', 'utf8');
    const reviews = reviewsData
      .trim()
      .split('\n')
      .map(JSON.parse);

    const review = reviews.find((r) => r.review_id === reviewId);

    if (review) {
      const reviewText = review.text;
      console.log("Review Text:", reviewText);
    } else {
      console.log("Review not found.");
    }
  } catch (error) {
    console.error("Error reading the reviews file:", error);
  }
};

const getBusinessNameById = async (businessId) => {
  try {
    const shopsData = await fsPromises.readFile('./shops.json', 'utf8');
    const shops = shopsData
      .trim()
      .split('\n')
      .map(JSON.parse);

    const shop = shops.find((s) => s.business_id === businessId);

    if (shop) {
      const shopName = shop.name;
      console.log("Shop Name:", shopName);
    } else {
      console.log("Shop not found.");
    }
  } catch (error) {
    console.error("Error reading the shops file:", error);
  }
};

getReviewTextById("BiTunyQ73aT9WBnpR9DZGw");
getBusinessNameById("MUTTqe8uqyMdBl186RmNeA");
