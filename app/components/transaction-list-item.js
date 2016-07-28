import Ember from "ember";

const {
    computed,
    get,
    Component,
} = Ember;

export default Component.extend({
    classNames: ["list-group-item", "btn", "btn-default", "transaction-list-item"],

    participants: computed("transaction.participants", function () {
        return get(this, "transaction.participants").getEach("name").join(", ");
    }),

    click() {
        const onClick = get(this, "onClick");

        if (typeof onClick === "function") {
            onClick();
        }
    },
});
