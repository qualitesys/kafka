console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/network/Authenticator.java 1 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Closeable"
 , "c2" : "org.apache.kafka.common.network.Authenticator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.network.Authenticator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#40"
 , "c1" : "void"
 , "c2" : "authenticate()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#47"
 , "c1" : "void"
 , "c2" : "handleAuthenticationFailure()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#53"
 , "c1" : "KafkaPrincipal"
 , "c2" : "principal()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#58"
 , "c1" : "Optional&lt;KafkaPrincipalSerde&gt;"
 , "c2" : "principalSerde()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#63"
 , "c1" : "boolean"
 , "c2" : "complete()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#86"
 , "c1" : "void"
 , "c2" : "reauthenticate(ReauthenticationContext)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#102"
 , "c1" : "Long"
 , "c2" : "serverSessionExpirationTimeNanos()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00119"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#119"
 , "c1" : "Long"
 , "c2" : "clientSessionReauthenticationTimeNanos()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00134"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#134"
 , "c1" : "Long"
 , "c2" : "reauthenticationLatencyMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00152"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#152"
 , "c1" : "Optional&lt;NetworkReceive&gt;"
 , "c2" : "pollResponseReceivedDuringReauthentication()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00163"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#163"
 , "c1" : "boolean"
 , "c2" : "connectedClientSupportsReauthentication()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.svg" }

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
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00030] The interface Authenticator does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/network/Authenticator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
