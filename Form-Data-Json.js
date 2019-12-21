(function ($) {
    $.fn.formSerializeJSON = function () {

        var jsonObj = {};
        var formData = this.serializeArray();
        $.each(formData, function () {
            if (jsonObj[this.name]) {
                if (!jsonObj[this.name].push) {
                    jsonObj[this.name] = [jsonObj[this.name]];
                }
                jsonObj[this.name].push(this.value || '');
            } else {
                jsonObj[this.name] = this.value || '';
            }
        });
        return jsonObj;
    };
})(jQuery);

$('form').submit(function (e) {
    e.preventDefault();
    var jsonData = $(this).formSerializeJSON();
    console.log(jsonData);
});
