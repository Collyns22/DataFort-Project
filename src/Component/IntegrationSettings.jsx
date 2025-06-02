const IntegrationSettings = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Integration Settings</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="apiKey"
          >
            API Key
          </label>
          <input
            type="text"
            id="apiKey"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your API key"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="webhookUrl"
          >
            Webhook URL
          </label>
          <input
            type="url"
            id="webhookUrl"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your webhook URL"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="integrationStatus"
          >
            Integration Status
          </label>
          <select
            id="integrationStatus"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default IntegrationSettings;
