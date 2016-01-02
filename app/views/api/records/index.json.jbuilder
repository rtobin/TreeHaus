json.set! "records" do
  json.partial! 'api/records/record', collection: @records, as: :record
end
# json.records
json.type @type
