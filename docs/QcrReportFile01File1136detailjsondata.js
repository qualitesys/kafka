console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java 15 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Configurable<ResourceConfig>"
 , "c2" : "org.apache.kafka.connect.runtime.rest.ConnectRestConfigurable"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.rest.ConnectRestConfigurable" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConnectRestConfigurable"
 , "c2" : "ConnectRestConfigurable(ResourceConfig)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Configuration"
 , "c2" : "getConfiguration()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ResourceConfig"
 , "c2" : "property(String;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ResourceConfig"
 , "c2" : "register(Object)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ResourceConfig"
 , "c2" : "register(Object;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ResourceConfig"
 , "c2" : "register(Object;Map<Class<?>,Integer>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ResourceConfig"
 , "c2" : "register(Object;Class<?>...)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ResourceConfig"
 , "c2" : "register(Class<?>;Map<Class<?>,Integer>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ResourceConfig"
 , "c2" : "register(Class<?>;Class<?>...)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ResourceConfig"
 , "c2" : "register(Class<?>;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "ResourceConfig"
 , "c2" : "register(Class<?>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "allowedToRegister(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "allowedToRegister(Class<?>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.svg" }

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
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class ConnectRestConfigurable contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.connect.runtime.rest.ConnectRestConfigurable.ConnectRestConfigurable@POLYN168958 the MagicNumber/String  'ResourceConfig can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method property arguments String  name|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method register arguments Object  component"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method register arguments Object  component|int  priority"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method register arguments Object  component|Map&lt;Class&lt;? &gt; ,Integer &gt;  contracts"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method register arguments Object  component|Class&lt;? &gt;  ...contracts"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method register arguments Class&lt;? &gt;  componentClass|Map&lt;Class&lt;? &gt; ,Integer &gt;  contracts"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method register arguments Class&lt;? &gt;  componentClass|Class&lt;? &gt;  ...contracts"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method register arguments Class&lt;? &gt;  componentClass|int  priority"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method register arguments Class&lt;? &gt;  componentClass"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method allowedToRegister arguments Object  component"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.connect.runtime.rest.ConnectRestConfigurable.allowedToRegister@POLYN172206 the MagicNumber/String  'The resource {} is already registered' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method allowedToRegister arguments Class&lt;? &gt;  componentClass"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/ConnectRestConfigurable.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.connect.runtime.rest.ConnectRestConfigurable.allowedToRegister@POLYN172533 the MagicNumber/String  'The resource {} is already registered' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
