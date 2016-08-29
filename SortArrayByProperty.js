        function sortRatesByConfiguration(writerRates) {
            return writerRates.reduce(function (result, current) {
                result[current.product_configuration_id] = result[current.product_configuration_id] || [];
                result[current.product_configuration_id].push(current);
                return result;
            }, {});
        }