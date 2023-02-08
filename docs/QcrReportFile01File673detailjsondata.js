console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java 18 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.requests.FetchMetadata"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.requests.FetchMetadata" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#62"
 , "c1" : "int"
 , "c2" : "nextEpoch(int)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#83"
 , "c1" : "FetchMetadata"
 , "c2" : "FetchMetadata(int;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#91"
 , "c1" : "boolean"
 , "c2" : "isFull()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#95"
 , "c1" : "int"
 , "c2" : "sessionId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#99"
 , "c1" : "int"
 , "c2" : "epoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#104"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#109"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00119"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#119"
 , "c1" : "FetchMetadata"
 , "c2" : "nextCloseExisting()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00126"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#126"
 , "c1" : "FetchMetadata"
 , "c2" : "newIncremental(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00133"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#133"
 , "c1" : "FetchMetadata"
 , "c2" : "nextIncremental()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00138"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#138"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "7"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.svg" }

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
"data11" : [
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
 , "c4" : "13"
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method nextEpoch arguments int  prevEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.requests.FetchMetadata.nextEpoch@POLYN159802 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.requests.FetchMetadata.nextEpoch@POLYN159802 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.requests.FetchMetadata.nextEpoch@POLYN159802 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00111] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.common.requests.FetchMetadata.equals@POLYN161162 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.requests.FetchMetadata.equals@POLYN161162 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.requests.FetchMetadata.equals@POLYN161162 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method newIncremental arguments int  sessionId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.common.requests.FetchMetadata.toString@POLYN162369 the MagicNumber/String  '(sessionId=INVALID, ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.common.requests.FetchMetadata.toString@POLYN162369 the MagicNumber/String  '(sessionId=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.common.requests.FetchMetadata.toString@POLYN162369 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.common.requests.FetchMetadata.toString@POLYN162369 the MagicNumber/String  'epoch=INITIAL)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.common.requests.FetchMetadata.toString@POLYN162369 the MagicNumber/String  'epoch=FINAL)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.common.requests.FetchMetadata.toString@POLYN162369 the MagicNumber/String  'epoch=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.common.requests.FetchMetadata.toString@POLYN162369 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00062] Public method nextEpoch is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/requests/FetchMetadata.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
