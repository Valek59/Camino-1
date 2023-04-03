class ClientsController < ApplicationController
  def developpement
    @client = Client.new
  end

  def accompagnement
    @client = Client.new
  end

  def pilotage
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
end
