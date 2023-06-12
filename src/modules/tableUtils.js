import { calculator } from "./calculator";

/**
 * Get transformed data from server response of customer-transaction data
 * transformed data type
 * {
 *  id: number,
 *  name: string,
 *  [firstMonth]: number,
 *  [secondMonth]: number,
 *  [thirdMonth]: number,
 *  total: number
 * }
 * @param { Array[{ id: string, name: string, transactions: Array[{ purchase_date, price }] }] } data
 * @returns transformed data
 */
export function transformData(data) {
  return data.reduce((res, customerData) => {
    let item = res.find((item) => item.id === customerData.id);
    if (!item) {
      item = {
        id: customerData.id,
        name: customerData.name,
        total: 0,
      };
    }

    customerData.transactions.forEach((transaction) => {
      const date = new Date(transaction.purchase_date);
      const month = date.getMonth() + 1;

      if (!item[month]) {
        item[month] = 0;
      }
      const rewardPoint = calculator(transaction.price);
      item[month] += rewardPoint;
      item.total += rewardPoint;
    });

    res.push(item);
    return res;
  }, []);
}

/**
 * Get reward table header and relative data props
 * @param { string } year year of quarter transaction record
 * @param { string[] | number[]] } months quarter months array
 * @returns fields of the reward table (name, month1, month2, month3, total)
 */
export function getTableFields(year, months) {
  months.sort((a, b) => a - b);
  return [
    { label: "Name", field: "name" },
    { label: `${year} - ${months[0]}`, field: months[0] },
    { label: `${year} - ${months[1]}`, field: months[1] },
    { label: `${year} - ${months[2]}`, field: months[2] },
    { label: "Total", field: "total" },
  ];
}
