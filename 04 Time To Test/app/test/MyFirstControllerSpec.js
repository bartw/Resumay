describe("Tests for MyFirstController", function ()
{
	it("given color is green when switchcolor is executed then color should be red", function () {
		var color = "green";
		expect(color).toEqual("red");
	});
	
	it("given color is not green when switchcolor is executed then color should be green", function () {
		var color = "notGreen";
		expect(color).toEqual("green");
	});
});