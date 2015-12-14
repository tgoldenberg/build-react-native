class CustomersController < ApplicationController
  respond_to :json
  skip_before_action :verify_authenticity_token

  # GET /customers
  # GET /customers.json
  def index
    customers = Customer.all.order("created_at DESC").to_json
    render json: customers
  end

  # GET /customers/1
  # GET /customers/1.json
  def show
    @customer = Customer.find(params[:id]).to_json
    render json: @customer
  end

  # GET /customers/new
  def new
    @customer = Customer.new
  end

  # GET /customers/1/edit
  def edit
  end

  # POST /customers
  # POST /customers.json
  def create
    @customer = Customer.new(customer_params)
    if @customer.save
      @customers = Customer.all.order("created_at DESC").to_json
      render json: @customers
    else
      render json: @customer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /customers/1
  # PATCH/PUT /customers/1.json
  def update
    @customer = Customer.find(params[:id])
    @customer.update_attributes customer_params
    @customers = Customer.all.order("created_at DESC").to_json
    render json: @customers
  end

  # DELETE /customers/1
  # DELETE /customers/1.json
  def destroy
    @customer = Customer.find(params[:id])
    @customer.destroy
    @customers = Customer.all.order("created_at DESC").to_json
    render json: @customers
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def customer_params
      params.require(:customer).permit(:email)
    end
end
