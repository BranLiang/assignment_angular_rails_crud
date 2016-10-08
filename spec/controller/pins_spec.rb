require "rails_helper"

RSpec.describe PinsController, :type => :controller do
  before do
    FactoryGirl.create_list(:pin, 10)
  end

  describe 'GET #index' do
    it "responds successfully with an HTTP 200 status code" do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it "returns a list of pins" do
      get :index
      expect(response.body.length).to be(10)
    end
  end
end
