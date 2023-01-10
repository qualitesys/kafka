console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java 13 rule violations " 
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
 , "c5" : "00052"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#52"
 , "c1" : "PluginClassLoader"
 , "c2" : "PluginClassLoader(URL;URL[];ClassLoader)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#64"
 , "c1" : "PluginClassLoader"
 , "c2" : "PluginClassLoader(URL;URL[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#75"
 , "c1" : "String"
 , "c2" : "location()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#80"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#89"
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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
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
 , "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.toString@POLYN157239 the MagicNumber/String  'PluginClassLoader{pluginLocation=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.toString@POLYN157239 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method loadClass arguments String  name|boolean  resolve"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#90"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00090] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN157402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN157402 the MagicNumber/String  'Class '{}' not found. Delegating to parent' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN157402 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN157402 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN157402"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN157402 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00099] In the recursive method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN157402 the MagicNumber/String 'Class '{}' not found. Delegating to parent' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00102] In the recursive method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN157402 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00103] In the recursive method org.apache.kafka.connect.runtime.isolation.PluginClassLoader.loadClass@POLYN157402 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/isolation/PluginClassLoader.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
