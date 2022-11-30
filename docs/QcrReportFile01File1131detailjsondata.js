console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java 8 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "URLClassLoader"
 , "c2" : "org.apache.kafka.connect.runtime.isolation.PluginClassLoader"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.isolation.PluginClassLoader" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#20"
 , "c1" : "PluginClassLoader"
 , "c2" : "PluginClassLoader(URL;URL[];ClassLoader)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#26"
 , "c1" : "PluginClassLoader"
 , "c2" : "PluginClassLoader(URL;URL[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#32"
 , "c1" : "String"
 , "c2" : "location()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#37"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#46"
 , "c1" : "Class<?>"
 , "c2" : "loadClass(String;boolean)"
 , "c3" : "5"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.toString@POLYN155701 the MagicNumber/String  'PluginClassLoader{pluginLocation=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.toString@POLYN155701 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method loadClass arguments String  name|boolean  resolve"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#47"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00047] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN155864 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN155864 the MagicNumber/String  'Class '{}' not found. Delegating to parent' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN155864 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN155864 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
