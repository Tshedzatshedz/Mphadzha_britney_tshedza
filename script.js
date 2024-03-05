        function toggleHiddenParagraph() {
          var hiddenParagraph = document.getElementById('hidden-paragraph');
          var readMoreBtn = document.getElementById('read-more-btn');
          var hidden_box = document.getElementById('Hidden-box');
          var download_cv = document.getElementById('qoute_btn')
    
          if (hiddenParagraph.style.display === 'none') {
            hiddenParagraph.style.display = 'block';
            hidden_box.style.display="block";
            readMoreBtn.style.display="none";
            download_cv.style.display='none';
            links.style.display ="none"
          } else {
            hiddenParagraph.style.display = 'none';
            hidden_box.style.display="block";
            links.style.display="block"
        
          }
        };

        function AboutHiddenContainer(){
            var hidden_box = document.getElementById('Hidden-box');
            var readLessBtn =document.getElementById('read-less-btn');
            var readMoreBtn = document.getElementById('read-more-btn');
            var download_cv = document.getElementById('qoute_btn');
            var hidden_paragraph = document.getElementById('hidden-paragraph');
            var links = document.getElementById("links");

            if (hidden_box.style.display =="block"){
                hidden_box.style.display="none";
                readMoreBtn.style.display="block";
                download_cv.style.display="block";
                hidden_paragraph.style.display="none";
                links.style.display= "block"               
                
            }else{
                readMoreBtn.style.display ="none";
                hidden_paragraph.style.display="block";
                links.style.display="none"
            
            }

        };


        function toggleHiddenModules() {
            var hiddenModules = document.querySelectorAll('.hidden-modules');
            var showMoreBtn = document.getElementById('show-more-btn');
            var showLessBtn = document.getElementById('show-less-btn');

            hiddenModules.forEach(function (module) {
               if (module.style.display === 'none' || module.style.display === '') {
                     module.style.display = 'block';
                     showMoreBtn.style.display="none"
                     showLessBtn.style.display="block";

               } else {
                    module.style.display = 'none';
                    showMoreBtn.style.display="block"
                    module.style.display='none';
                    showLessBtn.style.display="none";

                  }
             });
            }
        function toggleHiddenModuless() {
            var hiddenModuless = document.querySelectorAll('.hidden-modules-2')
            var showMoreBtn = document.getElementById('show-more-btnN');
             hiddenModuless.forEach(function (modulee) {
               if (modulee.style.display === 'none' || modulee.style.display === '') {
                     modulee.style.display = 'block';
                     showMoreBtn.innerText = 'Show less';
               } else {
                    modulee.style.display = 'none';
                    showMoreBtn.innerText = 'Show more';
                  }
             });
            }
        function toggleHiddenProjects() {
            var hiddenProjects = document.getElementById('hidden-projects-1');
            var hiddenProjects_2 = document.getElementById('hidden-projects-2');
            var hiddenProjects_3 = document.getElementById('hidden-projects-3');
            var showMoreBtn = document.getElementById('show-more-btnn');
             
               if (hiddenProjects .style.display === 'none') {
                     hiddenProjects .style.display = 'block';
                     hiddenProjects_2 .style.display = 'block';
                     hiddenProjects_3 .style.display = 'block';
                     showMoreBtn.innerText = 'Show less';
               } else {
                    hiddenProjects .style.display = 'none';
                    hiddenProjects_2 .style.display = 'none';
                    hiddenProjects_3 .style.display = 'none';
                    showMoreBtn.innerText = 'Show more';
                  }
             };

        function toggleHiddenDescription1(){
            var container = document.getElementById("dis_container");
            var projects_box = document.getElementById('projectContainer');
            var project = document.querySelector(".project_type1");
            var showMOreBtn = document.getElementById("show-more-btnn");
            var hiddenProjects = document.getElementById('hidden-projects-1');
            var hiddenProjects_2 = document.getElementById('hidden-projects-2');
            var hiddenProjects_3 = document.getElementById('hidden-projects-3');
            var main_project_container =document.getElementById("project");
            var tools = document.querySelector(".skills_and_tools");

           

            if (container.style.display === "none"){
                container.style.display = "block";
                project.style.display ="block";
                projects_box.style.position = "absolute";
                projects_box.style.opacity =" 0.5";
                projects_box.style.right = "10px";
                showMOreBtn.style.display="none";
                hiddenProjects.style.display ="none";
                main_project_container.style.position = "relative";
                tools.style.position ="relative";
                tools.style.top ="20px";
                hiddenProjects .style.display = 'none';
                hiddenProjects_2 .style.display = 'none';
                hiddenProjects_3 .style.display = 'none';
 

        }else{
            container.style.display = 'none';
            projects_box.style.position = "relative";
            projects_box.style.opacity =" 1";
            projects_box.style.right ="0px";
            showMOreBtn.style.display="block";
            hiddenProjects.style.display ="none";
            hiddenProjects .style.display = 'none';
            hiddenProjects_2 .style.display = 'none';
            hiddenProjects_3 .style.display = 'none';
 

        }

        };
        function toggleHiddenDescription2(){
            var container = document.getElementById("dis_container1");
            var projects_box = document.getElementById('projectContainer');
            var project = document.querySelector(".project_type2");
            var showMOreBtn = document.getElementById("show-more-btnn");
            var hiddenProjects = document.getElementById('hidden-projects-1');
            var hiddenProjects_2 = document.getElementById('hidden-projects-2');
            var hiddenProjects_3 = document.getElementById('hidden-projects-3');
            var main_project_container =document.getElementById("project");
            var tools = document.querySelector(".skills_and_tools");

           

            if (container.style.display === "none"){
                container.style.display = "block";
                project.style.display ="block";
                projects_box.style.position = "absolute";
                projects_box.style.opacity =" 0.5";
                projects_box.style.right = "10px";
                showMOreBtn.style.display="none";
                hiddenProjects.style.display ="none";
                main_project_container.style.position = "relative";
                tools.style.position ="relative";
                tools.style.top ="20px";
                hiddenProjects .style.display = 'none';
                hiddenProjects_2 .style.display = 'none';
                hiddenProjects_3 .style.display = 'none';


        }else{
            container.style.display = 'none';
            projects_box.style.position = "relative";
            projects_box.style.opacity =" 1";
            projects_box.style.right ="0px";
            showMOreBtn.style.display="block";
            hiddenProjects.style.display ="none";
            hiddenProjects .style.display = 'none';
            hiddenProjects_2 .style.display = 'none';
            hiddenProjects_3 .style.display = 'none';

        }

        };
        function toggleHiddenDescription3(){
            var container = document.getElementById("dis_container2");
            var projects_box = document.getElementById('projectContainer');
            var project = document.querySelector(".project_type3");
            var showMOreBtn = document.getElementById("show-more-btnn");
            var hiddenProjects = document.getElementById('hidden-projects-1');
            var hiddenProjects_2 = document.getElementById('hidden-projects-2');
            var hiddenProjects_3 = document.getElementById('hidden-projects-3');
            var main_project_container =document.getElementById("project");
            var tools = document.querySelector(".skills_and_tools");
           

            if (container.style.display === "none"){
                container.style.display = "block";
                project.style.display ="block";
                projects_box.style.position = "absolute";
                projects_box.style.opacity =" 0.5";
                projects_box.style.right = "10px";
                showMOreBtn.style.display="none";
                hiddenProjects.style.display ="none";
                main_project_container.style.position = "relative";
                tools.style.position ="relative";
                tools.style.top ="20px";
                hiddenProjects .style.display = 'none';
                hiddenProjects_2 .style.display = 'none';
                hiddenProjects_3 .style.display = 'none';

        }else{
            container.style.display = 'none';
            projects_box.style.position = "relative";
            projects_box.style.opacity =" 1";
            projects_box.style.right ="0px";
            showMOreBtn.style.display="block";
            hiddenProjects.style.display ="none";
            hiddenProjects .style.display = 'none';
            hiddenProjects_2 .style.display = 'none';
            hiddenProjects_3 .style.display = 'none';

        }

        };
        function toggleHiddenDescription4(){
            var container = document.getElementById("dis_container3");
            var projects_box = document.getElementById('projectContainer');
            var project = document.querySelector(".project_type4");
            var showMOreBtn = document.getElementById("show-more-btnn");
            var hiddenProjects = document.getElementById('hidden-projects-1');
            var hiddenProjects_2 = document.getElementById('hidden-projects-2');
            var hiddenProjects_3 = document.getElementById('hidden-projects-3');
            var main_project_container =document.getElementById("project");
            var tools = document.querySelector(".skills_and_tools");
           

            if (container.style.display === "none"){
                container.style.display = "block";
                project.style.display ="block";
                projects_box.style.position = "absolute";
                projects_box.style.opacity =" 0.5";
                projects_box.style.right = "10px";
                showMOreBtn.style.display="none";
                hiddenProjects.style.display ="none";
                main_project_container.style.position = "relative";
                tools.style.position ="relative";
                tools.style.top ="20px";
                hiddenProjects .style.display = 'none';
                hiddenProjects_2 .style.display = 'none';
                hiddenProjects_3 .style.display = 'none';

        }else{
            container.style.display = 'none';
            projects_box.style.position = "relative";
            projects_box.style.opacity =" 1";
            projects_box.style.right ="0px";
            showMOreBtn.style.display="block";
            hiddenProjects.style.display ="none";
            hiddenProjects .style.display = 'none';
            hiddenProjects_2 .style.display = 'none';
            hiddenProjects_3 .style.display = 'none';

        }

        };
         function toggleHiddenDescription5(){
            var container = document.getElementById("dis_container4");
            var projects_box = document.getElementById('projectContainer');
            var project = document.querySelector(".project_type5");
            var showMOreBtn = document.getElementById("show-more-btnn");
            var hiddenProjects = document.getElementById('hidden-projects-1');
            var hiddenProjects_2 = document.getElementById('hidden-projects-2');
            var hiddenProjects_3 = document.getElementById('hidden-projects-3');
            var main_project_container =document.getElementById("project");
            var tools = document.querySelector(".skills_and_tools");
           

            if (container.style.display === "none"){
                container.style.display = "block";
                project.style.display ="block";
                projects_box.style.position = "absolute";
                projects_box.style.opacity =" 0.5";
                projects_box.style.right = "10px";
                showMOreBtn.style.display="none";
                hiddenProjects.style.display ="none";
                main_project_container.style.position = "relative";
                tools.style.position ="relative";
                tools.style.top ="20px";
                hiddenProjects .style.display = 'none';
                hiddenProjects_2 .style.display = 'none';
                hiddenProjects_3 .style.display = 'none';

        }else{
            container.style.display = 'none';
            projects_box.style.position = "relative";
            projects_box.style.opacity =" 1";
            projects_box.style.right ="0px";
            showMOreBtn.style.display="block";
            hiddenProjects.style.display ="none";
            hiddenProjects .style.display = 'none';
            hiddenProjects_2 .style.display = 'none';
            hiddenProjects_3 .style.display = 'none';

        }

        };
        function toggleHiddenDescription6(){
            var container = document.getElementById("dis_container5");
            var projects_box = document.getElementById('projectContainer');
            var project = document.querySelector(".project_type6");
            var showMOreBtn = document.getElementById("show-more-btnn");
            var hiddenProjects = document.getElementById('hidden-projects-1');
            var hiddenProjects_2 = document.getElementById('hidden-projects-2');
            var hiddenProjects_3 = document.getElementById('hidden-projects-3');
            var main_project_container =document.getElementById("project");
            var tools = document.querySelector(".skills_and_tools");
           

            if (container.style.display === "none"){
                container.style.display = "block";
                project.style.display ="block";
                projects_box.style.position = "absolute";
                projects_box.style.opacity =" 0.5";
                projects_box.style.right = "10px";
                showMOreBtn.style.display="none";
                hiddenProjects.style.display ="none";
                main_project_container.style.position = "relative";
                tools.style.position ="relative";
                tools.style.top ="20px";
                hiddenProjects.style.display = 'none';
                hiddenProjects_2.style.display = 'none';
                hiddenProjects_3.style.display = 'none';

        }else{
            container.style.display = 'none';
            projects_box.style.position = "relative";
            projects_box.style.opacity =" 1";
            projects_box.style.right ="0px";
            showMOreBtn.style.display="block";
            showMOreBtn.innerText ="show more";
            hiddenProjects.style.display = 'block';
            hiddenProjects_2.style.display = 'bock';
            hiddenProjects_3.style.display = 'block';

        }

        };
         function toggleHiddenDescription7(){
            var container = document.getElementById("dis_container6");
            var projects_box = document.getElementById('projectContainer');
            var project = document.querySelector(".project_type7");
            var showMOreBtn = document.getElementById("show-more-btnn");
            var hiddenProjects = document.getElementById('hidden-projects-1');
            var hiddenProjects_2 = document.getElementById('hidden-projects-2');
            var hiddenProjects_3 = document.getElementById('hidden-projects-3');
            var main_project_container =document.getElementById("project");
            var tools = document.querySelector(".skills_and_tools");
           

            if (container.style.display === "none"){
                container.style.display = "block";
                project.style.display ="block";
                projects_box.style.position = "absolute";
                projects_box.style.opacity =" 0.5";
                projects_box.style.right = "10px";
                showMOreBtn.style.display="none";
                hiddenProjects.style.display ="none";
                main_project_container.style.position = "relative";
                tools.style.position ="relative";
                tools.style.top ="20px";
                hiddenProjects .style.display = 'none';
                hiddenProjects_2 .style.display = 'none';
                hiddenProjects_3 .style.display = 'none';

        }else{
            container.style.display = 'none';
            projects_box.style.position = "relative";
            projects_box.style.opacity =" 1";
            projects_box.style.right ="0px";
            showMOreBtn.style.display="block";
            showMOreBtn.innerText="Show more"
            hiddenProjects.style.display ="none";
            hiddenProjects .style.display = 'none';
            hiddenProjects_2 .style.display = 'none';
            hiddenProjects_3 .style.display = 'none';

        }

        };
