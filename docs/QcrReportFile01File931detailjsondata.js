console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java 1 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Configurable"
 , "c2" : "org.apache.kafka.server.quota.ClientQuotaCallback"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.quota.ClientQuotaCallback" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java.html#40"
 , "c1" : "Map&lt;String,String&gt;"
 , "c2" : "quotaMetricTags(ClientQuotaType;KafkaPrincipal;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java.html#54"
 , "c1" : "Double"
 , "c2" : "quotaLimit(ClientQuotaType;Map&lt;String,String&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java.html#65"
 , "c1" : "void"
 , "c2" : "updateQuota(ClientQuotaType;ClientQuotaEntity;double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java.html#75"
 , "c1" : "void"
 , "c2" : "removeQuota(ClientQuotaType;ClientQuotaEntity)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java.html#89"
 , "c1" : "boolean"
 , "c2" : "quotaResetRequired(ClientQuotaType)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java.html#99"
 , "c1" : "boolean"
 , "c2" : "updateClusterMetadata(Cluster)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java.html#104"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java.svg" }

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
 , "c2" : "QC-JAVSOLIDI"
 , "c3" : "The class does not respect the SOLID principle Interface Segregation"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java.html#28"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00028] The interface ClientQuotaCallback does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/server/quota/ClientQuotaCallback.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
