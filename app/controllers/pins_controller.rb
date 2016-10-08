class PinsController < ApplicationController
  def index
    @pins = Pin.all
    respond_to do |format|
      format.json { render json: @pins.to_json(:include => :user), status: 200 }
<<<<<<< HEAD
=======
    end
  end

  def show
    @pin = Pin.find_by_id(params[:id])
    respond_to do |format|
      if @pin
        format.json { render json: @pin.to_json(:include => :user), status: 200 }
      else
        format.json { render json: { error: 'Not found' }, status: 404 }
      end
    end
  end

  def update
    @pin = current_user.pins.find_by_id(params[:id])
    respond_to do |format|
      if @pin && @pin.update(white_list_params)
        format.json { render json: @pin.to_json(:include => :user), status: 200 }
      else
        format.json { render json: { error: 'Not Found' }, status: 404 }
      end
    end
  end

  def create
    @pin = current_user.pins.build(white_list_params)
    respond_to do |format|
      if @pin.save
        format.json { render json: @pin.to_json(:include => :user), status: 200 }
      else
        format.json { render json: { :error => @pin.errors.full_message }, status: 400 }
      end
    end
  end

  def destroy
    @pin = current_user.pins.find_by_id(params[:id])
    respond_to do |format|
      if @pin&.destroy
        format.json { render json: @pin.to_json(:include => :user), status: 200 }
      else
        format.json { render json: { :error => "Not found" }, status: 404 }
      end
>>>>>>> crud
    end
  end
end
