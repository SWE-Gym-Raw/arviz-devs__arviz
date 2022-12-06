(function() {
  const fn = function() {
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("adf65b26-a4f6-4846-938b-c6a174cccd58");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'adf65b26-a4f6-4846-938b-c6a174cccd58' but no matching script tag was found.")
        }
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-3.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-3.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-3.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-3.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-3.0.2.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"61472d2e-28be-428d-a5be-c6a35ab831e7":{"version":"3.0.2","title":"Bokeh Application","defs":[],"roots":[{"type":"object","name":"GridPlot","id":"p10098","attributes":{"toolbar":{"type":"object","name":"Toolbar","id":"p10097","attributes":{"tools":[{"type":"object","name":"ResetTool","id":"p10033"},{"type":"object","name":"PanTool","id":"p10034"},{"type":"object","name":"BoxZoomTool","id":"p10035","attributes":{"overlay":{"type":"object","name":"BoxAnnotation","id":"p10036","attributes":{"syncable":false,"level":"overlay","visible":false,"left_units":"canvas","right_units":"canvas","bottom_units":"canvas","top_units":"canvas","line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"WheelZoomTool","id":"p10037"},{"type":"object","name":"LassoSelectTool","id":"p10038","attributes":{"renderers":"auto","overlay":{"type":"object","name":"PolyAnnotation","id":"p10039","attributes":{"syncable":false,"level":"overlay","visible":false,"xs":[],"xs_units":"canvas","ys":[],"ys_units":"canvas","line_color":"black","line_alpha":1.0,"line_width":2,"line_dash":[4,4],"fill_color":"lightgrey","fill_alpha":0.5}}}},{"type":"object","name":"UndoTool","id":"p10040"},{"type":"object","name":"SaveTool","id":"p10096"},{"type":"object","name":"HoverTool","id":"p10042","attributes":{"renderers":"auto"}}]}},"children":[[{"type":"object","name":"Figure","id":"p10002","attributes":{"width":500,"height":500,"x_range":{"type":"object","name":"DataRange1d","id":"p10003"},"y_range":{"type":"object","name":"DataRange1d","id":"p10004"},"x_scale":{"type":"object","name":"LinearScale","id":"p10015"},"y_scale":{"type":"object","name":"LinearScale","id":"p10017"},"title":{"type":"object","name":"Title","id":"p10072","attributes":{"text":"mu"}},"renderers":[{"type":"object","name":"GlyphRenderer","id":"p10060","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p10054","attributes":{"selected":{"type":"object","name":"Selection","id":"p10055","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p10056"},"data":{"type":"map","entries":[["x",{"type":"ndarray","array":{"type":"bytes","data":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw=="},"shape":[20],"dtype":"float64","order":"little"}],["y",{"type":"ndarray","array":{"type":"bytes","data":"AA0SBxsAkUDWWOWbW4+YQLBbSW5uH5tAXBAcP+zrm0CqU+oSFxagQGPkrN44npxA4rZhwq2wn0CfJUveJ4qdQEcgT1svnJ1Ad0VLCLB9nkCAqJ7cge6ZQIdYsYrp6p1ARlKXWau2mkCmxrR9QN6cQK6eHAS8155A86SMxJeKnEBVjGWkaTOeQI9gAevQAqBA8VK/u6zrnUBOOTxanbaXQA=="},"shape":[20],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p10061","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p10062"}}},"glyph":{"type":"object","name":"Circle","id":"p10057","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":6},"line_color":{"type":"value","value":"#1f77b4"},"fill_color":{"type":"value","value":"#1f77b4"}}},"nonselection_glyph":{"type":"object","name":"Circle","id":"p10058","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":6},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.1},"fill_color":{"type":"value","value":"#1f77b4"},"fill_alpha":{"type":"value","value":0.1},"hatch_alpha":{"type":"value","value":0.1}}},"muted_glyph":{"type":"object","name":"Circle","id":"p10059","attributes":{"x":{"type":"field","field":"x"},"y":{"type":"field","field":"y"},"size":{"type":"value","value":6},"line_color":{"type":"value","value":"#1f77b4"},"line_alpha":{"type":"value","value":0.2},"fill_color":{"type":"value","value":"#1f77b4"},"fill_alpha":{"type":"value","value":0.2},"hatch_alpha":{"type":"value","value":0.2}}}}},{"type":"object","name":"GlyphRenderer","id":"p10067","attributes":{"data_source":{"type":"object","name":"ColumnDataSource","id":"p10064","attributes":{"selected":{"type":"object","name":"Selection","id":"p10065","attributes":{"indices":[],"line_indices":[]}},"selection_policy":{"type":"object","name":"UnionRenderers","id":"p10066"},"data":{"type":"map","entries":[["rug_x",{"type":"ndarray","array":{"type":"bytes","data":""},"shape":[0],"dtype":"float64","order":"little"}],["rug_y",{"type":"ndarray","array":{"type":"bytes","data":""},"shape":[0],"dtype":"float64","order":"little"}]]}}},"view":{"type":"object","name":"CDSView","id":"p10068","attributes":{"filter":{"type":"object","name":"AllIndices","id":"p10069"}}},"glyph":{"type":"object","name":"Scatter","id":"p10063","attributes":{"x":{"type":"field","field":"rug_x"},"y":{"type":"field","field":"rug_y"},"size":{"type":"value","value":8},"angle":{"type":"value","value":1.5707963267948966},"line_alpha":{"type":"value","value":0.35},"marker":{"type":"value","value":"dash"}}}}},{"type":"object","name":"Span","id":"p10070","attributes":{"location":0,"line_alpha":0.7,"line_width":1.5}},{"type":"object","name":"Span","id":"p10071","attributes":{"location":400,"line_color":"red","line_width":3,"line_dash":[6]}}],"toolbar":{"type":"object","name":"Toolbar","id":"p10008","attributes":{"tools":[{"id":"p10033"},{"id":"p10034"},{"id":"p10035"},{"id":"p10037"},{"id":"p10038"},{"id":"p10040"},{"type":"object","name":"SaveTool","id":"p10041"},{"id":"p10042"}]}},"toolbar_location":null,"left":[{"type":"object","name":"LinearAxis","id":"p10026","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p10029","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p10028"},"axis_label":"ESS for small intervals","major_label_policy":{"type":"object","name":"AllLabels","id":"p10027"}}}],"below":[{"type":"object","name":"LinearAxis","id":"p10019","attributes":{"ticker":{"type":"object","name":"BasicTicker","id":"p10022","attributes":{"mantissas":[1,2,5]}},"formatter":{"type":"object","name":"BasicTickFormatter","id":"p10021"},"axis_label":"Quantile","major_label_policy":{"type":"object","name":"AllLabels","id":"p10020"}}}],"center":[{"type":"object","name":"Grid","id":"p10025","attributes":{"axis":{"id":"p10019"}}},{"type":"object","name":"Grid","id":"p10032","attributes":{"dimension":1,"axis":{"id":"p10026"}}}],"output_backend":"webgl"}},0,0]]}}]}}';
                  const render_items = [{"docid":"61472d2e-28be-428d-a5be-c6a35ab831e7","roots":{"p10098":"adf65b26-a4f6-4846-938b-c6a174cccd58"},"root_ids":["p10098"]}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
    function(Bokeh) {
        }
      ];
    
      function run_inline_js() {
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();