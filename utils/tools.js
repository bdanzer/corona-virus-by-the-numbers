import slugify from "slugify";
import _ from "lodash";

export function kFormatter(num) {
    return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : num;
}

export const getSlugged = (slug) => {
    return slug
        ? slugify(slug.replace(/\./g, ""), {
              lower: true,
          })
        : "";
};

export const unSlug = (slug) => {
    return slug ? _.capitalize(slug.replace(/-/g, " ")) : "";
};
