# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

default_users = [
  "nixon", "jimmy", "brian", "betty", "rebekah", "tommy", "jerry", "david", "adrian",
  "chris", "katrina", "carmen", "andres"
]

category_pictures = {
	"Cosmetology" => [
    "http://mymakeupideas.com/wp-content/uploads/2015/09/29.jpg",
    "http://www.evergreenbeauty.edu/wp-content/uploads/2015/05/Can-I-Study-Mac-Makeup-Classes-at-Makeup-Artist-School.jpg",
    "https://cdnx.ogleschool.edu/wp-content/uploads/2014/01/makeup-artist-career.jpg",
    "http://getinmedia.com/sites/default/files/imagecache/node-sized-image/article-images/Hairstylist.jpg",
    "https://www.boldsky.com/img/2011/07/26-hair-coloring-260711.jpg",
    "http://ghk.h-cdn.co/assets/16/41/1476212506-rose-gold-ombre.jpg",
    "https://i.pinimg.com/736x/f7/35/b7/f735b7fcfb87c4e226bb54432032333e--trend-hair-color--color-hair.jpg",
    "http://pbacademy.net/images/West-Palm-Beach-Barber.jpg",
    "http://www.sunstate.edu/wp-content/uploads/2015/01/ssa-barber-4.jpg",
    "http://rosewoodcutters.com/wp-content/uploads/2017/02/no-more-waiting.jpg"
  ],
  "Culinary" => [
    "http://cdn.funcheap.com/wp-content/uploads/2013/09/plated.jpg",
    "http://i.ndtvimg.com/i/2015-12/technique-625_623x350_61449041551.jpg",
    "http://chefcristina.com/wp-content/uploads/2015/10/JC-Catering_033-V2.jpg",
    "https://www.allculinaryschools.com/wp-content/uploads/2016/12/baking-pastry-pastry-chef-job.jpg",
    "https://www.casaschools.com/wp-content/uploads/2016/03/course-pastry-chef-450x300.jpg?x25576",
    "https://i2.wp.com/www.culinarycareer.net/wp-content/uploads/2015/10/pastry-chef-assistant.jpg",
    "https://digitalmarketing.blob.core.windows.net/5561/images/items/image73820.jpg",
    "http://theplantationcatering.com/images/images/catering-01.jpg",
    "https://www.ellensstardustdiner.com/assets/img/blog/catering.jpg",
    "https://i.pinimg.com/236x/42/fa/3a/42fa3acf72576171725771c06261a416--biscotti-cookies-cookie-gifts.jpg",
    "http://theawesomedaily.com/wp-content/uploads/2017/01/ornamental-cookies-6-1.jpg",
    "http://susiecakes.com/app/uploads/2016/01/SC-menu-mini-cupcakes.jpg",
    "https://i.pinimg.com/originals/c6/59/91/c659910ece7c56ad88e723ac494a9a53.png"
  ],
  "Art/Design" => [
    "https://www.2440media.com/sites/default/files/assets/images/blog/design.jpg",
    "https://www.publicity.com/wp-content/uploads/2015/01/Graphic-designer-image-e1451578389515.jpg",
    "https://socialnetworkmd.com/wp-content/uploads/2017/03/graphic-designer.jpg",
    "https://www.creativeboom.com/uploads/articles/67/6741f2f8f1f0cdfdebdcaba2ec046866a4650a82_1200.jpg",
    "https://i.pinimg.com/736x/1e/57/5d/1e575d3626d4155e1d0abb262d8f9bca--ice-art-snow-sculptures.jpg",
    "https://assets.fastcompany.com/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3049002-poster-p-1-want-an-unusual-product-designer-hire-a-sculptor.jpg",
    "https://i.ytimg.com/vi/d4JzZ7h25eU/maxresdefault.jpg",
    "http://achhikhabre.com/wp-content/uploads/2014/11/ebru-garip-ay.jpg",
    "http://cdn2.hubspot.net/hubfs/53/typography-for-beginners.jpg",
    "https://i.pinimg.com/736x/07/04/5a/07045a16f41d770844ef4d0951a7f0ca--watercolor-background-watercolor-bird.jpg",
    "http://webneel.com/daily/sites/default/files/images/daily/09-2013/8-animal-fantasy-digital-art-by-sakimichan.preview.jpg"
  ],
  "Automotive" => [
    "http://www.autoglassmartinsburg.com/images/slider4.png",
    "http://www.juniperautorepair.com/wp-content/uploads/2015/04/oil-change-south-philly-2015-summer-coupon.jpg",
    "http://www.servicespace.org/inc/ckfinder/userfiles/images/hothers/tire.jpg"
  ],
  "Massage Therapy" => [
    "http://painsolutionsaz.com/wp-content/uploads/2016/10/Tabe-massage.jpg",
    "https://s3-media3.fl.yelpcdn.com/bphoto/6Q5xHOdYs5D7svP6b_A_Mg/ls.jpg",
    "http://static.wixstatic.com/media/81a3d9_237ea7e336624f48844b552fd5f0505a.jpg",
    "https://guzzardochiropractic.com/clients/18247/images/eastern-massage-therapy1.jpg",
    "http://www.tri-c.edu/community/community-services/images/massage-therapy-3-clinic.jpg"
  ],
	"Animal Care" => [
    "http://www.petmd.com/sites/default/files/doggroomer.jpg",
    "https://topdogtips.com/wp-content/uploads/2016/12/Where-To-Begin-Your-Career-As-A-Pet-Groomer-1021x580.jpg",
    "https://media.mercola.com/ImageServer/Public/2015/November/dog-in-bath-tub-fb.jpg",
    "http://www.petmd.com/sites/default/files/dog-bath-mistakes-spray.jpg",
    "http://mylittletelaviv.com/wp-content/uploads/2016/03/DOG-SITTER.jpg",
    "https://blog.bestbullysticks.com/wp-content/uploads/2011/08/Dogwalker.jpg",
    "http://dogsaholic.com/wp-content/uploads/2015/05/Dog-walker.jpg",
    "http://9tixb2v94ky1cp8qg3l1k4ba.wpengine.netdna-cdn.com/wp-content/uploads/2016/07/SEO-for-Veterinarian.jpg",
    "http://veterinarytechnicianguide.com/wp-content/uploads/2015/04/veterinary-technician-schools.jpg",
    "https://www.manchestercc.edu/wp-content/uploads/ce-vet-775.jpg"
  ],
  "Fitness/Nutrition" => [
    "https://www.ed2go.com/common/images/1/16522/online-personal-training.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WQHRtlEYBlW68sf6JmxvR31X7auI3MdHin3ID94_YWL3Lavc5g",
    "http://www.nw.edu/wp-content/uploads/2015/12/north-west-college-health-care-careers-professional-fitness-trainer.jpg",
    "http://tipsfromtia.com/wp-content/uploads/2017/08/How-a-Nutritionist-Can-Help-You-900x600.jpg",
    "https://www.rd.com/wp-content/uploads/sites/2/2016/07/02-nutritionist-secrets.jpg",
    "http://ffmag.com/wp-content/uploads/2015/11/foodprep.jpg"
  ],
  "Travel/Tourism" => [
    "http://leisuregrouptravel.com/wp-content/uploads/2016/07/touguideimage-500x275.jpg",
    "https://d36tnp772eyphs.cloudfront.net/blogs/1/2009/02/tourguide.jpg",
    "http://dollyparton-tour.com/wp-content/uploads/2017/02/Tour-Guide.jpg",
    "http://www.foodtourpros.com/wp-content/uploads/2015/02/successful-tour-guides-700x400.jpg"
  ],
  "Film/Photography" => [
    "http://www.antsmediagroup.com/Justin_Weily_six_senses_.jpg",
    "http://img-aws.ehowcdn.com/340x221p/photos.demandstudios.com/getty/article/151/127/86479615.jpg",
    "https://images.indiegogo.com/file_attachments/1019758/files/20141116105214-IMG_0587.jpg?1416163934",
    "http://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j.jpg",
    "https://img.alwayswanderlust.com/2016/04/lens-1209823_1280.jpg",
    "https://diyprojects.com/wp-content/uploads/2014/06/DIY-Photography-Equipment-25.jpg",
    "http://www.beautifulfeed.com/wp-content/uploads/2017/02/Unique-Wedding-Photography-Inspiration-18.jpg",
    "https://i.pinimg.com/736x/cf/73/47/cf7347e41f2a1f46576ff7e722776774--country-wedding-pictures-bride-and-groom-country-groom.jpg",
    "https://i.pinimg.com/736x/ea/90/0f/ea900f4ba79dd85461b368e834e809df--garden-wedding-groom-outdoor-wedding-groom-attire.jpg",
    "https://singaporebrides.com/articles/wp-content/uploads/2017/07/singapore-wedding-photography-synchronal-photography.jpg"
  ]
}

default_users.each do |username|
  pw = "#{username}123"
  email = "#{username}@demo.com"
  User.create(username: username, password: pw, email: email)
end

user_ids = (User.first.id..User.last.id).to_a

categories = [
  "Cosmetology", "Culinary", "Art/Design", "Automotive", "Massage Therapy", "Animal Care",
  "Fitness/Nutrition", "Travel/Tourism", "Film/Photography"
]

100.times do
  category = categories.sample
  image = category_pictures[category].sample
  default_text = "Looking for a professional in #{category}? Look no further, I'm offering my service for #{category} for the low price of $15/hr. If you're interested, shoot me a message!"
  Post.create(user_id: user_ids.sample, title: "#{category} Job Title",
    body: default_text, category: category, image: image)
end

post_ids = (Post.first.id..Post.last.id).to_a

10.times do |i|
  Bookmark.create(user_id: user_ids[i], post_id: post_ids.first)
end

user_ids.each do |user_id|
  10.times do
    image = category_pictures[categories.sample].sample
    Photo.create(user_id: user_id, image_url: image)
  end
end
