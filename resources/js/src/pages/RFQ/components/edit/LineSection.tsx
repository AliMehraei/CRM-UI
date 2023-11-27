import AsyncSelect from "react-select/async";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import { searchAvailability, searchExcess, searchProducts } from "../../../../components/Functions/CommonFunctions";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../../store/rfqFormSlice";
import Api from "../../../../config/api";
import { useState } from "react";
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JS
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}:${month}:${day}`;
};

export const LineSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.rfqFormSlice);
    const api = new Api();
    interface AvailabilitySuggestion {
        availability_name: string;
        availability_source: string;
        cost: number;
        currency: string;
        created_at: string;
      }
      interface SuggestionsData {
        web: AvailabilitySuggestion[];
        nonWeb: AvailabilitySuggestion[];
      }
      
      const [suggestionsData, setSuggestionsData] = useState<SuggestionsData>({
        web: [],
        nonWeb: [],
      });

      const ProductSuggestionsTable: React.FC<{ suggestions: SuggestionsData }> = ({ suggestions }) => (
        <>
          <h3 className="text-xl">Availability Suggestions :</h3>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Availability</th>
                <th className="py-2 px-4 border-b">Availability Source</th>
                <th className="py-2 px-4 border-b">Availability Cost</th>
                <th className="py-2 px-4 border-b">Availability Created Date</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {suggestions.web.map((suggestion, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="py-2 px-4 border-b">{suggestion.availability_name}</td>
                  <td className="py-2 px-4 border-b">{suggestion.availability_source}</td>
                  <td className="py-2 px-4 border-b">{suggestion.cost} {suggestion.currency}</td>
                  <td className="py-2 px-4 border-b">{formatDate(suggestion.created_at)}</td>
                  <td className="py-2 px-4 border-b"><button className="btn btn-sm">Select</button></td>
                </tr>
              ))}
              {suggestions.nonWeb.map((suggestion, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="py-2 px-4 border-b">{suggestion.availability_name}</td>
                  <td className="py-2 px-4 border-b">{suggestion.availability_source}</td>
                  <td className="py-2 px-4 border-b">{suggestion.cost} {suggestion.currency}</td>
                  <td className="py-2 px-4 border-b">{formatDate(suggestion.created_at)}</td>
                  <td className="py-2 px-4 border-b"><button className="btn btn-sm">Select</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
      

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
        if (field === 'product_id') {
            fetchAvailabilitySuggestions(value);
        }
    };
    const fields = {
        'RFQ Line': {
            'Product Name': <AsyncSelect
                defaultOptions={false} isMulti={false} id="product_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchProducts}
                onChange={({ value }: any) => {
                    handleChangeField('product_id', value)
                }}
                defaultValue={{
                    value: formState.product?.id,
                    label: (
                        <div key={formState.product?.id} className="flex items-center">
                            <div
                                className="text-sm font-bold">{formState.product?.product_name}</div>
                        </div>
                    ),
                }}
                className="flex-1"
                required />,

            'Customer Part Id': <input id="customer_part_id" name="customer_part_id" className="form-input flex-1 "
                defaultValue={formState.customer_part_id}
                onChange={(e: any) => handleChangeField(e.target.name, e.target.value)} />,

            'Quantity': <input id="quantity" name="quantity" className="form-input flex-1 "
                defaultValue={formState.quantity}
                onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
                required />,

            'Target Price': <input id="target_price" name="target_price"
                defaultValue={formState.target_price}
                onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
                className="form-input flex-1 " />,
        },
        '': {
            'Alternative Products': <AsyncSelect
                defaultOptions={true} id="alternative_products" name="alternative_products"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchProducts}
                onChange={(values: any) => {
                    handleChangeField('alternative_products', values.map((v: any) => v.value))
                }}
                isMulti={true}
                defaultValue={formState.rfq_product_alternatives
                    ? formState.rfq_product_alternatives.map((data: any) => ({
                        value: data.id,
                        label: (
                            <div key={data.id} className="flex items-center">
                                <div>
                                    <div className="text-sm font-bold">{data.product_name}</div>
                                </div>
                            </div>
                        ),
                    }))
                    : []
                }
                className="flex-1" />,
            'Availability': <AsyncSelect
                defaultOptions={false} isMulti={false} id="availability" name="availability_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchAvailability}
                onChange={({ value }: any) => {
                    handleChangeField('availability_id', value)
                }}
                defaultValue={{
                    value: formState.contact?.id,
                    label: (
                        <div key={formState.availability?.id} className="flex items-center">
                            <div
                                className="text-sm font-bold">{formState.availability?.availability_name}</div>
                        </div>
                    ),
                }}
                className="flex-1" />,
            'Excess': <AsyncSelect
                defaultOptions={true} isMulti={false} id="excess_id"
                name="excess_id"
                placeholder="Type at least 2 characters to search..."
                loadOptions={searchExcess}
                onChange={({ value }: any) => {
                    handleChangeField('excess_id', value)
                }}
                defaultValue={{
                    value: formState.excess?.id,
                    label: (
                        <div key={formState.excess?.id} className="flex items-center">
                            <div
                                className="text-sm font-bold">{formState.excess?.excess_name}</div>
                        </div>
                    ),
                }}
                className="flex-1" />,
            'Special Instructions': <textarea id="special_instructions" name="special_instructions" rows={3}
                defaultValue={formState.special_instructions}
                onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
                className="form-textarea flex-1"></textarea>,

            'comment': <textarea id="comment" rows={3} name="comment" className="form-textarea flex-1"
                defaultValue={formState.comment}
                onChange={(e: any) => handleChangeField(e.target.name, e.target.value)}
                placeholder=""></textarea>,

        }

    };

    const fetchAvailabilitySuggestions = async (productId: string) => {
        try {
            const response = await api.fetchSuggestedAvailability(productId);
            if (response.status === 200) {
                const avas = response.data.data;
                const webSuggestions = avas.web ? [avas.web] : [];
                const nonWebSuggestions = avas.nonWeb ? [avas.nonWeb] : [];
                setSuggestionsData({ web: webSuggestions, nonWeb: nonWebSuggestions });
            }
        } catch (error) {
            console.error('Error fetching availability suggestions:', error);
        }
    };
    

    return (<>
        <div className="flex justify-between lg:flex-row flex-col">
            <GenerateFields fields={fields} />
        </div>
        <ProductSuggestionsTable suggestions={suggestionsData} />

    </>)
}
