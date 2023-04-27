# The ClientsController handles requests related to clients in the system.
# It provides methods for retrieving a list of all clients or an individual client by ID.
class ClientsController < ApplicationController
  def developpement
    @client = Client.new
  end

  def mentions_legales
    @client = Client.new
  end

  def pilotage
    @client = Client.new
  end

  def new
    @client = Client.new
  end

  def create
    @client = Client.new
    if @client.save
      redirect_to developpement_path notice: "Votre demande de prise de contact a bien été enregistrée"
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def client_params
    params.require(:client).permit(:name, :email, :phone, :message)
  end
end
