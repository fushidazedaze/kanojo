// // This will ONLY work with TypeScript on module: "commonjs"
// import TwitterApi from 'twitter-api-v2';

// const userClient = new TwitterApi({
//     appKey: '8H4ASX83NxyIiaLUiz83iAV7H',
//     appSecret: '4VKz2hBdU5XxE0DA7sAzMUDmn9GLYG1biYdCAegwspcKKIhT9F',
//     // Following access tokens are not required if you are
//     // at part 1 of user-auth process (ask for a request token)
//     // or if you want a app-only client (see below)
//     accessToken: '1600751178476064768-OfEYEiGNrrXD9xntmQsuePvoVodD0q',
//     accessSecret: '1avTzMuZCzoYRHMEkkMBV0SyYJCeq3LfrhJYwHJuoztqa',
// });

// // OAuth2 (app-only or user context)
// // Create a client with an already known bearer token
// const appOnlyClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAOLVkAEAAAAAuR2%2Bn83Pk4MJBWPvfmmEA4VMtIU%3DTRhmWoQRiUyhhwfqUXoaAfg6NdKxEf3nmIltIl0ZENNISyZ7HK');
// // OR - you can also create a app-only client from your consumer keys -
// const appOnlyClientFromConsumer = await userClient.appLogin();

// const buttonTweet = () => {
//     client.post('statuses/update', { status: 'I am a tweet' }, function (error, tweet, response) {
//         if (!error) {
//             console.log(tweet);
//         }
//     });
// }

const randomImage = () => {
    num = 5; //画像の枚数
    r = Math.floor(Math.random() * num);
    IMAGES = "./images/" + r + ".png";
    console.log(IMAGES);
    let target = document.querySelector("#target");
    target.src = IMAGES
}