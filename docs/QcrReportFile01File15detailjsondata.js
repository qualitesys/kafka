console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java 17 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "MetadataUpdater"
 , "c2" : "org.apache.kafka.clients.ManualMetadataUpdater"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.ManualMetadataUpdater" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ManualMetadataUpdater"
 , "c2" : "ManualMetadataUpdater()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ManualMetadataUpdater"
 , "c2" : "ManualMetadataUpdater(List<Node>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setNodes(List<Node>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<Node>"
 , "c2" : "fetchNodes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isUpdateDue(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "maybeUpdate(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleServerDisconnect(long;String;Optional<AuthenticationException>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleFailedRequest(long;Optional<KafkaException>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "handleSuccessfulResponse(RequestHeader;long;MetadataResponse)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "4"
}}
,
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class ManualMetadataUpdater contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.clients.ManualMetadataUpdater.ManualMetadataUpdater@POLYN166967 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method setNodes arguments List&lt;Node &gt;  nodes"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method isUpdateDue arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.clients.ManualMetadataUpdater.isUpdateDue@POLYN167599 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method maybeUpdate arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method handleServerDisconnect arguments long  now|String  nodeId|Optional&lt;AuthenticationException &gt;  maybeAuthException"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method handleFailedRequest arguments long  now|Optional&lt;KafkaException &gt;  maybeFatalException"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method handleSuccessfulResponse arguments RequestHeader  requestHeader|long  now|MetadataResponse  response"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00046] Void method handleServerDisconnect is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00046] Void method handleServerDisconnect is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00052] Void method handleFailedRequest is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00052] Void method handleFailedRequest is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00057] Void method handleSuccessfulResponse is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00057] Void method handleSuccessfulResponse is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00062] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/ManualMetadataUpdater.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00062] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
