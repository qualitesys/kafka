console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.rest.ErrorResponse"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.rest.ErrorResponse" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#34"
 , "c1" : "ErrorResponse"
 , "c2" : "ErrorResponse(int;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#41"
 , "c1" : "int"
 , "c2" : "code()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#46"
 , "c1" : "String"
 , "c2" : "message()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#51"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#60"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#65"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00053] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.trogdor.rest.ErrorResponse.equals@POLYN156721 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.trogdor.rest.ErrorResponse.equals@POLYN156721 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.trogdor.rest.ErrorResponse.equals@POLYN156721 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00065] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/ErrorResponse.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
