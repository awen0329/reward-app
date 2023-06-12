## Description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is for calculating the reward points based on transaction records.

## How to run the project

`yarn install` then `yarn start`

After that, you can open `localhost:3000`

## How to run the test

`yarn test`

## Mock server

You can check mock api in `src/server` directory. \
There is a response json file which created via [json-generator.com](https://json-generator.com) \
Here is the schema to generate mocked response data via above online service.

<pre>
{
  year: "2023",
  months: [4,5,6],
  data: [
    '{{repeat(100)}}',
    {
      id: '{{guid()}}',
      name: '{{firstName()}} {{surname()}}',
      transactions: [
        '{{repeat(0, 15)}}',
        {
          purchase_date: '{{date(new Date(2023, 3, 1), new Date(2023, 5, 30), "YYYY-MM-ddThh:mm:ss")}}',
          price: '{{integer(10, 200) * 100}}'
        }
      ]
    }
  ]
}
</pre>