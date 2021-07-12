function updateOutput()
      {
        $("iframe").contents().find("html").html("<html><head><style = 'text/css'>" + $(".css-panel").val() + "</style></head><body>" + $(".html-panel").val() + "</body></html");
        document.getElementById("output-panel").contentWindow.eval($(".javascript-panel").val());
      }

      $(".file").click(function()
      {
        $("#file-toggle").toggle();
        $(this).toggleClass("file-click");
      });

      $(".help").click(function()
      {
        $("#help-toggle").toggle();
        $(this).toggleClass("help-click");
      });

      $(".top-buttons").click(function()
      {
        $(this).toggleClass("top-buttons-click");
      });

      $(".output").click(function()
      {
        $(this).toggleClass("output-button-click");
      });

      
      $(".panel").height($(window).height() - 40);

      $("iframe").contents().find("html").html($(".html-panel").val());

      updateOutput();
      $("textarea").on("change keyup paste", function()
      {
        updateOutput();
      });


      $("#html").click(function()
      {
        $(".html-panel").toggle();
      }
      );

      $("#css").click(function()
      {
        $(".css-panel").toggle();
      }
      );

      $("#javascript").click(function()
      {
        $(".javascript-panel").toggle();
      }
      ); 

      $(".output").click(function()
      {
        $("#output-panel").toggle();
      }
      ); 