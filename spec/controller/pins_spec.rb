require "rails_helper"

describe "Pin API", type: :request do
  before do
    FactoryGirl.create_list(:pin, 10)
  end

  context 'GET #index' do
    it "responds successfully with an HTTP 200 status code" do
      get '/api/v1/pins.json'
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "returns a list of pins" do
      get '/api/v1/pins.json'
      json = JSON.parse(response.body)
      expect(json.length).to be(10)
    end
  end

  context 'POST #create' do

  end
end
