function rightScroll() {
  const right = document.querySelector(".container");
  right.scrollBy(200, 0);
}
function leftScroll() {
  const left = document.querySelector(".container");
  left.scrollBy(-200, 0);
}

const closeNav = document.querySelector("nav .close");
const menuBar = document.querySelector("header .menubar");

closeNav.addEventListener("click", () => {
  document.querySelector("nav").style.display = "none";
});
menuBar.addEventListener("click", () => {
  document.querySelector("nav").style.display = "block";
});

// ==============
// TEAMS JS START
// ==============

const MLTeam = [
  {
    name: "Kolawole-Jacobs Demilade",
    role: "ML Lead",
    picture: "",
    birthday: "August 10",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Oluwafikayomi Adeleke",
    role: "",
    picture: "",
    birthday: "April 3",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Ifihan",
    role: "",
    picture: "",
    birthday: "September 16",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Oluwafolabomi Adebayo-Oke",
    role: "",
    picture: "",
    birthday: "June 17",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Aisha Anibaba",
    role: "",
    picture: "",
    birthday: "October 28",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Toluwase Shoniran Semilore",
    role: "",
    picture: "",
    birthday: "April 12",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const CMULTeam = [
  {
    name: "Paul Aderoju",
    role: "CMUL Lead",
    picture: "/images/assets/team/CMUL/PaulAderoju.jpeg",
    birthday: "September 1",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const designTeam = [
  {
    name: "Khadijah Abdulkabir",
    role: "Design Lead",
    picture: "/images/assets/team/Design/KhadijahAbdulkabir.jpeg",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Evergreen Odeh",
    role: "UI/UX Designer",
    picture: "",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Awwal Adeoye",
    role: "UI/UX Designer",
    picture: "",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Olaleye Ibrahim",
    role: "UI/UX Designer",
    picture: "",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Sholanke Semiat Ayomide",
    role: "Graphic Designer",
    picture: "/images/assets/team/Design/SholankeSemiatAyomide.jpeg",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Ibiam Joshua",
    role: "Graphic Designer",
    picture: "",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Ifeoluwa Olakunle",
    role: "Graphic Designer",
    picture: "",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const contentTeam = [
  {
    name: "Jesus Akanle ",
    role: "Content Lead",
    picture: "/images/assets/team/Content/JesusAkanle.jpeg",
    birthday: "August 6",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Abigail Offong",
    role: "Co-Lead",
    picture: "/images/assets/team/Content/AbigailOffong.jpeg",
    birthday: "January 9",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Miracle Ukeje",
    role: "",
    picture: "/images/assets/team/Content/MiracleUkeje.jpeg",
    birthday: "July 27",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Abolare Roheemah",
    role: "",
    picture: "/images/assets/team/Content/AbolareRoheemah.jpeg",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const publicityTeam = [
  {
    name: "George Anya",
    role: "Publicity Lead",
    picture: "/images/assets/team/Publicity/GeorgeAnya.jpeg",
    birthday: "October 24",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Anthony Ihejiamatu",
    role: "Co-Lead",
    picture: "/images/assets/team/Publicity/AnthonyIhejiamatu.jpeg",
    birthday: "October 2",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Ayomide Olatunde",
    role: "",
    picture: "/images/assets/team/Publicity/AyomideOlatunde.jpeg",
    birthday: "February 19",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const sponsorshipTeam = [
  {
    name: "Ashinze Emmanuel Chidi",
    role: "Sponsorship Lead",
    picture: "/images/assets/team/Sponsorship/AshinzeEmmanuelChidi.jpeg",
    birthday: "January 7",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Anyahara Estherfavour",
    role: "",
    picture: "",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Aghedo Caleb",
    role: "",
    picture: "/images/assets/team/Sponsorship/AghedoCaleb.png",
    birthday: "February 20",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const communityTeam = [
  {
    name: "Ahmed Arigbabu",
    role: "Community Lead",
    picture: "/images/assets/team/Community/AhmedArigbabu.png",
    birthday: "May 15",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Peace Braide",
    role: "Co-Lead",
    picture: "/images/assets/team/Community/PeaceMarionbraide.jpeg",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Ibrahim Abdulrahim",
    role: "",
    picture: "/images/assets/team/Community/AbdulrahimIbrahim.jpg",
    birthday: "September 7",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Orimalade Eniola",
    role: "",
    picture: "/images/assets/team/Community/OrimaladeEniola.jpg",
    birthday: "March 7",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Michael Omoniyi",
    role: "",
    picture: "/images/assets/team/Community/MichaelOmoniyi.jpg",
    birthday: "March 4",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Confidence Ufuoma Adjarho",
    role: "",
    picture: "/images/assets/team/Community/ConfidenceUfuoma.jpg",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const technicalTeam = [
  {
    name: "Paul Asalu",
    role: "Technical Lead",
    picture: "/images/assets/team/Technical/PaulAsalu.jpeg",
    birthday: "",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Iyinoluwa Ogundairo",
    role: "Co-Lead",
    picture: "/images/assets/team/Technical/IyinoluwaOgundairo.jpg",
    birthday: "December 18",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Olayinka Adebisi",
    role: "",
    picture: "/images/assets/team/Technical/OlayinkaAdebisi.jpeg",
    birthday: "December 14",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Delight Olu-Olagbuji",
    role: "",
    picture: "/images/assets/team/Technical/DelightOlu-Olagbuji.jpg",
    birthday: "July 27",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Joshua Oloton",
    role: "",
    picture: "/images/assets/team/Technical/JoshuaOloton.jpg",
    birthday: "February 23",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Ridwan Adeyemo",
    role: "",
    picture: "/images/assets/team/Technical/RidwanAdeyemo.jpg",
    birthday: "May 19",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Abdulmaleek Adebayo",
    role: "",
    picture: "/images/assets/team/Technical/AbdulmaleekAdebayo.jpg",
    birthday: "March 15",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Daniel Adeniran",
    role: "",
    picture: "/images/assets/team/Technical/DanielAdeniran.jpg",
    birthday: "February 17",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const programsTeam = [
  {
    name: "Kolawole Temitope",
    role: "Programs Lead",
    picture: "/images/assets/team/Programs/TemitopeKolawole.jpeg",
    birthday: "November 15",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Kolade Oke",
    role: "Co-Lead",
    picture: "",
    birthday: "October 12",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Toluwani Ajibare",
    role: "",
    picture: "",
    birthday: "May 15",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Abdullah Mumuni",
    role: "",
    picture: "",
    birthday: "June 18",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Seun Ajayi",
    role: "",
    picture: "",
    birthday: "June 3",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Lutfat Adeoye",
    role: "",
    picture: "",
    birthday: "May 18",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Moyinoluwa Shabi",
    role: "",
    picture: "",
    birthday: "May 19",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const financeTeam = [
  {
    name: "UmmulKhair Abdulrasheed",
    role: "Finance Manager",
    picture: "",
    birthday: "June 5",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const tutorsTeam = [
  {
    name: "Afolabi Mercy (Aphomer)",
    role: "Tutors Lead",
    picture: "/images/assets/team/Tutors/AfolabiMercy.jpg",
    birthday: "October 27",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Truelife Agada",
    role: "",
    picture: "/images/assets/team/Tutors/TruelifeAgada.jpg",
    birthday: "September 28",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Oluwatomisin Bello",
    role: "",
    picture: "/images/assets/team/Tutors/OluwatomisinBello.jpg",
    birthday: "December 17",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Kofoworola Adetona",
    role: "",
    picture: "/images/assets/team/Tutors/KofoworolaAdetona.jpg",
    birthday: "January 2",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Aina Oluwaferanmi",
    role: "",
    picture: "/images/assets/team/Tutors/FeranmiAina.jpg",
    birthday: "October 11",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const eventsTeam = [
  {
    name: "Alawode Sharon",
    role: "Events Lead",
    picture: "/images/assets/team/Events/AlawodeSharon.jpg",
    birthday: "August 21",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Tobi Oloro",
    role: "Co-Lead",
    picture: "/images/assets/team/Events/TobiOloro.jpg",
    birthday: "June 11",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Olaitan Damilare Ayinde",
    role: "",
    picture: "/images/assets/team/Events/OlaitanDamilareAyinde.jpeg",
    birthday: "January 9",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Oreoluwa Ahmed",
    role: "",
    picture: "/images/assets/team/Events/OreoluwaAhmed.jpg",
    birthday: "December 17",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Taiwo Seun",
    role: "",
    picture: "/images/assets/team/Events/TaiwoSeun.jpg",
    birthday: "July 17",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Temitope Aderonmu",
    role: "",
    picture: "/images/assets/team/Events/TemitopeAderonmu.jpeg",
    birthday: "February 7",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Olamide Ajibona",
    role: "",
    picture: "/images/assets/team/Events/OlamideAjibona.jpeg",
    birthday: "May 1",
    twitterHandle: "",
    linkedInLink: "",
  },
  {
    name: "Sakinah Okunade",
    role: "",
    picture: "/images/assets/team/Events/SakinahOkunade.jpg",
    birthday: "March 13",
    twitterHandle: "",
    linkedInLink: "",
  },
];

const teamNameToArrayMapper = {
  "ML Team": MLTeam,
  "CMUL Team": CMULTeam,
  "Design Team": designTeam,
  "Content Team": contentTeam,
  "Publicity Team": publicityTeam,
  "Sponsorship Team": sponsorshipTeam,
  "Community Team": communityTeam,
  "Technical Team": technicalTeam,
  "Programs Team": programsTeam,
  "Finance Team": financeTeam,
  "Tutors Team": tutorsTeam,
  "Events Team": eventsTeam,
};

const GDSCLead = {
  name: "Hafsah Anibaba",
  role: "GDSC Lead",
  picture: "/images/assets/team/HafsahAnibaba.jpg",
  birthday: "June 15",
  twitterHandle: "",
  linkedInLink: "",
};

const GDSCCoLead = {
  name: "Daniel Asaboro Modupe",
  role: "GDSC Co-Lead",
  picture: "/images/assets/team/DanielAsaboro.jpeg",
  birthday: "August 6",
  twitterHandle: "",
  linkedInLink: "",
};

const teamsAsideUl = document.querySelector("#teams-aside > ul");
const teamLeadContainer = document.querySelector("#team-lead");
const selectionColours = ["#FAAB21", "#4285F4"];
const randomColour =
  selectionColours[Math.floor(Math.random() * selectionColours.length)];
const defaultColor = "#acaeb0";

const teamLeadImage = document.querySelector("#team-lead-image");
const teamLeadName = document.querySelector("#team-lead-name");
const teamLeadRole = document.querySelector("#team-lead-role");

const teamMembers = document.querySelector("#team-members");

const setColor = (element, color) => {
  element.style.color = color;
};

const setTeamLead = (teamLead) => {
  if (teamLead.picture.trim() === "") {
    teamLeadImage.src = "/images/assets/team/avatar.png";
  } else {
    teamLeadImage.src = teamLead.picture;
  }
  teamLeadImage.alt = teamLead.name;
  teamLeadName.textContent = teamLead.name;
  teamLeadRole.textContent = teamLead.role;
};

const checkForLead = (text) => {
  const role = text.toLowerCase();
  return (
    role.includes("manager") ||
    (role.includes("lead") && !role.includes("co-lead"))
  );
};

for (let i of teamsAsideUl.children) {
  if (i.textContent.trim() === "ML Team") {
    setColor(i, randomColour);
  } else {
    setColor(i, defaultColor);
  }

  i.addEventListener("click", () => {
    for (let j of teamsAsideUl.children) {
      if (j === i) {
        setColor(j, randomColour);
        const teamName = j.textContent.trim();
        const teamArray = teamNameToArrayMapper[teamName];
        let teamLeadSet = false;

        for (let k of teamArray) {
          const role = k.role.toLowerCase();

          if (
            role.includes("manager") ||
            (role.includes("lead") && !role.includes("co-lead"))
          ) {
            setTeamLead(k);
            teamLeadSet = true;
            break;
          }
        }

        if (!teamLeadSet && teamArray.length > 0) {
          setTeamLead(teamArray[0]);
        }

        const teamArrayWithoutLead = teamArray.filter(
          (member) => !checkForLead(member.role)
        );

        if (teamArrayWithoutLead.length === 0) {
          teamMembers.innerHTML = `<p class="no-team-members">No team members</p>`;
        }

        for (let i in teamArrayWithoutLead) {
          if (teamArrayWithoutLead[i].picture.trim() === "") {
            teamArrayWithoutLead[i].picture = "/images/assets/team/avatar.png";
          }
          if (teamArrayWithoutLead[i].role.trim() === "") {
            teamArrayWithoutLead[i].role = "Member";
          }
          teamMembers.innerHTML = teamArrayWithoutLead
            .map(
              (member) => `
              <div>
                <img
                  src="${member.picture}"
                  alt="${member.name}"
                  class="member-image"
                />
                <div style="text-align: left">
                  <h2 class="member-name">${member.name}</h2>
                  <p class="member-role">${member.role}</p>
                </div>
              </div>
            `
            )
            .join("");
        }
      } else {
        setColor(j, defaultColor);
      }
    }
  });
}

// =============
// TEAMS JS ENDS
// =============

// $(window).on("load", function() {
// 	"use strict";
// 	$("#loading").addClass("hidden");
// });

// var $iframe = $("iframe"),
// 	src = $iframe.data("src");

// if (window.matchMedia("(min-width: 720px)").matches) {
// 	$iframe.attr("src", src);
// } else {
// 	$iframe.css("display", "none");
// }

// $(document).ready(function() {
// 	$(window).scroll(function() {
// 		if ($(this).scrollTop() > 100) {
// 			$("#scroll").fadeIn();
// 		} else {
// 			$("#scroll").fadeOut();
// 		}
// 	});
// 	$("#scroll").click(function() {
// 		$("html, body").animate({scrollTop: 0}, 600);
// 		return false;
// 	});
// });

// (function($) {
// 	"use strict";

// 	/*====================================================*/
// 	/* VARIABLES                                           */
// 	/*====================================================*/
// 	var navBar = $(".custom-menu"),
// 		navbarLinks = $(".custom-menu .nav-link");

// 	/*====================================================*/
// 	/* STICKY NAVBAR                                      */
// 	/*====================================================*/
// 	$(window).on("scroll", function() {
// 		if ($(this).scrollTop() > 50) {
// 			$(navBar).addClass("navbar-is-sticky");
// 		} else {
// 			$(navBar).removeClass("navbar-is-sticky");
// 		}
// 	});

// 	$(".navbar-toggler").on("click", function(e) {
// 		$(this).toggleClass("menu-is-expanded");
// 	});

// 	$(document).on("click", ".navbar-collapse.show", function(e) {
// 		if ($(e.target).is("a")) {
// 			$(this).collapse("hide");
// 			$(".navbar-toggler").toggleClass("menu-is-expanded");
// 			// $('.Menu-Icon--Circle').css('transform', 'translateX(-50%) translateY(-50%) scale(1)');
// 		}
// 	});

// 	/*====================================================*/
// 	/* NAVBAR ON SCROLL EASING                            */
// 	/*====================================================*/
// 	$(navbarLinks).on("click", function(event) {
// 		var $anchor = $(this);
// 		$("html, body")
// 			.stop()
// 			.animate(
// 				{
// 					scrollTop: $($anchor.attr("href")).offset().top - 50
// 				},
// 				1250,
// 				"easeInOutExpo"
// 			);
// 		event.preventDefault();
// 	});

// 	/*====================================================*/
// 	/* team SLIDER                                 */
// 	/*====================================================*/

// 	//initialize new hammer instance and swipe functionalities
// 	var slider = new Hammer.Manager(document.getElementById("carouselExample"), {
// 		inputClass: Hammer.TouchInput
// 	});
// 	var Swipe = new Hammer.Swipe({direction: Hammer.DIRECTION_HORIZONTAL});
// 	slider.add(Swipe);

// 	//implement swipe action on the carousel
// 	slider.on("swiperight swipeleft", function(e) {
// 		e.preventDefault();
// 		if (e.type == "swiperight") {
// 			$(this).carousel("prev");
// 			checkitem();
// 		} else {
// 			$(this).carousel("next");
// 			checkitem();
// 		}
// 	});

// 	$("#carouselExample").on("slide.bs.carousel", function(e) {
// 		var $e = $(e.relatedTarget);
// 		var idx = $e.index();
// 		var itemsPerSlide = 3;
// 		var totalItems = $(".carousel-item").length;

// 		if (idx >= totalItems - (itemsPerSlide - 1)) {
// 			var it = itemsPerSlide - (totalItems - idx);
// 			for (var i = 0; i < it; i++) {
// 				// append slides to end
// 				if (e.direction == "left") {
// 					$(".carousel-item")
// 						.eq(i)
// 						.appendTo(".carousel-inner");
// 				} else {
// 					$(".carousel-item")
// 						.eq(0)
// 						.appendTo(".carousel-inner");
// 				}
// 			}
// 		}
// 	});
// 	/*====================================================*/
// 	/* TABS INIT                                   */
// 	/*====================================================*/
// 	$(".js-tabs a").on("click", function(e) {
// 		e.preventDefault();
// 		$(this).tab("show");
// 	});

// 	/*====================================================*/
// 	/* TOOLTIPS                                           */
// 	/*====================================================*/
// 	$('[data-toggle="tooltip"]').tooltip();

// 	/*====================================================*/
// 	/* VIDEO MODALS                                           */
// 	/*====================================================*/

// 	$(".js-video-modal-trigger").magnificPopup({
// 		type: "iframe",
// 		iframe: {
// 			patterns: {
// 				youtube: {
// 					index: "youtube.com/",
// 					id: function(url) {
// 						var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
// 						if (!m || !m[1]) return null;
// 						return m[1];
// 					},
// 					src: "//www.youtube.com/embed/%id%?autoplay=1"
// 				},
// 				vimeo: {
// 					index: "vimeo.com/",
// 					id: function(url) {
// 						var m = url.match(
// 							/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/
// 						);
// 						if (!m || !m[5]) return null;
// 						return m[5];
// 					},
// 					src: "//player.vimeo.com/video/%id%?autoplay=1"
// 				}
// 			}
// 		}
// 	});
// })(jQuery);
