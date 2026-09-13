const travel = (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        pageHeading: 'TRAVEL'
    });
};

module.exports = {
    travel
};
