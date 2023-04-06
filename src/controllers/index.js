const blogschema = require("../model/blogschema")

const getBlogPost = async (req, res) => {
    try {
        const { title, category, sort, select } = req.query
        const queryObject = {}
        if (category) {
            queryObject.category = category
        }
        if (title) {
            queryObject.title = title
        }
        let apiData = blogschema.find(queryObject)
        if (sort) {
            let sortFix = sort.split(",").join(" ")
            apiData = apiData.sort(sortFix)
        }
        if (select) {
            let selectFix = select.split(",").join(" ")
            apiData = apiData.select(selectFix)
        }
        const blogData = await apiData
        res.status(200).json(blogData)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getBlogPost }