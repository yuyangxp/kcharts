;KISSY.add(function(S){

	var COLOR_TPL = "{COLOR}";

	var themeCfg = {
		//默认主题
		"ks-chart-default":{
			title:{
		           content:"",
		           css:{
		            		"text-align":"center",
		            		"font-size":"16px",
		            		"font-weight": "bold",
		            		"color":"#666"
		           },
		           isShow:true
		    },
		    subTitle:{
		       content:"",
		       css:{
		            "text-align":"center",
		            "font-size":"12px",
		            "color":"#666"
		        },
		        isShow:true
		    },
			points:{
				attr:{
					stroke:"#fff",
					"r":4,
					"stroke-width":1.5,
					"fill":COLOR_TPL
				},
				hoverAttr:{
					stroke:"#fff",
					"r":5,
					"fill":COLOR_TPL,
					"stroke-width":0
				}
			},
			xGrids:{
				css:{
					color:"#eee"
				}
			},
			yGrids:{
				css:{
					color:"#eee"
				}
			},
			yAxis:{
				css:{
					color:"#000"
				}
			},
			xAxis:{
				css:{
					color:"#000"
				}
			},
			xLabels:{
				css:{
					"color":"#000",
					"font-size": "12px"
				}
			},
			yLabels:{
				css:{
					"color":"#000",
					"font-size": "12px"
				}
			},
			pointLine:{
				css:{
					color:"#aaa"
				}
			}
		},
		"ks-chart-analytiks":{
			title:{
		           content:"",
		           css:{
		            		"text-align":"center",
		            		"font-size":"16px",
		            		"font-weight": "bold",
		            		"color":"#666"
		           },
		           isShow:true
		    },
		    subTitle:{
		       content:"",
		       css:{
		            "text-align":"center",
		            "font-size":"12px",
		            "color":"#666"
		        },
		        isShow:true
		    },
			points:{
				attr:{
				  type:"circle",
	              stroke:"{COLOR}",
	              fill:"#fff",
	              "r":4,
	              "stroke-width":2
	            },
	            hoverAttr:{
	              type:"circle",
	              stroke:"{COLOR}",
	              fill:"#fff",
	              "r":5,
	              "stroke-width":2
	            }
			},
			xGrids:{
				css:{
					color:"#eee"
				}
			},
			yGrids:{
				css:{
					color:"#eee"
				}
			},
			yAxis:{
				css:{
					color:"#ccc"
				}
			},
			xAxis:{
				css:{
					color:"#ccc"
				}
			},
			xLabels:{
				css:{
					"color":"#666",
					"font-size": "12px"
				}
			},
			yLabels:{
				css:{
					"color":"#666",
					"font-size": "12px"
				}
			},
			pointLine:{
				css:{
					color:"#ccc"
				}
			}
		},
		"ks-chart-rainbow":{
			title:{
		           content:"",
		           css:{
		            		"text-align":"center",
		            		"font-size":"16px",
		            		"font-weight": "bold",
		            		"color":"#666"
		           },
		           isShow:true
		    },
		    subTitle:{
		       content:"",
		       css:{
		            "text-align":"center",
		            "font-size":"12px",
		            "color":"#666"
		        },
		        isShow:true
		    },
			points:{
				attr:{
					type:"circle",
					stroke:"#fff",
					"r":4,
					"stroke-width":1.5,
					"fill":COLOR_TPL
				},
				hoverAttr:{
					type:"circle",
					stroke:"#fff",
					"r":5,
					"fill":COLOR_TPL,
					"stroke-width":0
				}
			},
			xGrids:{
				css:{
					color:"#eee"
				}
			},
			yGrids:{
				css:{
					color:"#eee"
				}
			},
			yAxis:{
				css:{
					color:"#ccc"
				}
			},
			xAxis:{
				css:{
					color:"#ccc"
				}
			},
			xLabels:{
				css:{
					"color":"#666",
					"font-size": "12px"
				}
			},
			yLabels:{
				css:{
					"color":"#666",
					"font-size": "12px"
				}
			},
			pointLine:{
				css:{
					color:"#ccc"
				}
			}
		}
	};
	return themeCfg;
});