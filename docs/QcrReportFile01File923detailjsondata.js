console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/server/authorizer/Action.java 18 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.authorizer.Action"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.authorizer.Action" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Action"
 , "c2" : "Action(AclOperation;ResourcePattern;int;boolean;boolean)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ResourcePattern"
 , "c2" : "resourcePattern()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AclOperation"
 , "c2" : "operation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "logIfAllowed()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "logIfDenied()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "resourceReferenceCount()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.svg" }

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
 , "c4" : "16"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class Action contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.server.authorizer.Action.Action@POLYN173202 the MagicNumber/String  'operation can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.server.authorizer.Action.Action@POLYN173202 the MagicNumber/String  'resourcePattern can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.server.authorizer.Action.equals@POLYN175158 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.server.authorizer.Action.equals@POLYN175158 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  'Action(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  'resourcePattern='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  ', operation='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  ', resourceReferenceCount='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  ', logIfAllowed='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  ', logIfDenied='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/authorizer/Action.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.server.authorizer.Action.toString@POLYN176188 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
