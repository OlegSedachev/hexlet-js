import _ from "lodash";

export default (array) => {
  return _.last(array);
};
console.log(_.last(["one", "two"]));
